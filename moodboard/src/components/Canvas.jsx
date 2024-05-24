import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');
// eslint-disable-next-line react/prop-types
const Canvas = ({ images }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(null);

  const styles = {
    border: '1px solid black',
    borderRadius: 10,
  };

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    socket.emit('draw', { offsetX, offsetY, isDrawing: false });
  };
  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
    socket.emit('draw', { offsetX, offsetY, isDrawing: true });
  };
  const stopDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.81;
    const ctx = canvas.getContext('2d');
    setContext(ctx);
    const drawImage = (url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, img.width, img.height);
      };
    };

    socket.on('addImage', drawImage);
    socket.on('draw', ({ offsetX, offsetY, isDrawing }) => {
      if (!ctx) return;
      if (isDrawing) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      }
    });
    return () => {
      socket.off('addImage', drawImage);
      socket.off('draw');
    };
  }, []);

  useEffect(() => {
    if (context) {
      // eslint-disable-next-line react/prop-types
      images.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          context.drawImage(img, 0, 0, img.width, img.height);
        };
      });
    }
  }, [images, context]);

  return (
    <canvas
      ref={canvasRef}
      style={styles}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      onMouseOut={stopDrawing}
    />
  );
};

export default Canvas;
