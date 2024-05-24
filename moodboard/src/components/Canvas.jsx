import { useEffect, useRef, useState } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(null);

  const styles = {
    border: '2px solid black',
    borderRadius: 10,
  };

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
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
  }, []);
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
