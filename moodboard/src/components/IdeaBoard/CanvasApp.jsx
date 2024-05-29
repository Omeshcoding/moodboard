import { Layer, Stage } from 'react-konva';
import URLImage from './URLImage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
// {
//      src: 'https://konvajs.org/assets/yoda.jpg',
//      x: 150,
//      y: 100,
//      id: 'yoda',
//      width: 100,
//      height: 100,
//    },
//    {
//      src: 'https://konvajs.org/assets/lion.png',
//      x: 100,
//      y: 150,
//      id: 'lion',
//      width: 100,
//      height: 100,
//    },
const CanvasApp = () => {
  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [scale, setScale] = useState(1);
  const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const stageRef = useRef(null);
  const socketRef = useRef(null);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const stage = stageRef.current;
      stage.setPointersPositions(e);

      const files = e.dataTransfer.files;
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const newImage = {
          src: reader.result,
          x: stage.getPointerPosition().x,
          y: stage.getPointerPosition().y,
          id: `img${images.length + 1}`,
          width: 100,
          height: 100,
        };

        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        socketRef.current.emit('updatedImages', updatedImages);
        console.log(updatedImages);
      };
      reader.readAsDataURL(file);
    },
    [images]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSelect = (id) => {
    selectShape(id);
  };

  const handleChange = (id, newAttrs) => {
    const updatedImages = images.map((image) => {
      return image.id === id ? { ...image, ...newAttrs } : image;
    });
    setImages(updatedImages);
    socketRef.current.emit('updateImages', updatedImages);
  };
  const handleWheel = (e) => {
    if (isDraggingImage) return;

    console.log(e.evt);
    e.evt.preventDefault();
    const stage = stageRef.current;
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    const scaleBy = 1.1;
    const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
    setScale(newScale);

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };
    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    setStagePos(newPos);
  };

  const handleImageDragStart = () => {
    setIsDraggingImage(true);
  };
  const handleImageDragEnd = () => {
    setIsDraggingImage(false);
  };

  useEffect(() => {
    const handleStageClick = (e) => {
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        selectShape(null);
      }
    };
    stageRef.current?.on('click', handleStageClick);
    const handleStageDblClick = () => {
      if (images.length === 0) return;

      // Calculate the bounding box of all images
      const minX = Math.min(...images.map((img) => img.x));
      const minY = Math.min(...images.map((img) => img.y));
      const maxX = Math.max(...images.map((img) => img.x + img.width));
      const maxY = Math.max(...images.map((img) => img.y + img.height));

      const boxWidth = maxX - minX;
      const boxHeight = maxY - minY;

      // Calculate the new scale to fit the images
      const stage = stageRef.current;
      const scaleX = stage.width() / boxWidth;
      const scaleY = stage.height() / boxHeight;
      const newScale = Math.min(scaleX, scaleY) * 0.8; // Leave some margin

      // Center the stage on the images
      const newPos = {
        x: -(minX + boxWidth / 2) * newScale + stage.width() / 2,
        y: -(minY + boxHeight / 2) * newScale + stage.height() / 2,
      };

      setScale(newScale);
      setStagePos(newPos);
    };
    stageRef.current?.on('dblclick', handleStageDblClick);

    return () => {
      stageRef.current?.off('click', handleStageClick);
      stageRef.current?.off('dblclick', handleStageDblClick);
    };
  }, [images]);

  useEffect(() => {
    const handleStageClick = (e) => {
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        selectShape(null);
      }
    };
    stageRef.current?.on('click', handleStageClick);
    return () => {
      stageRef.current?.off('click', handleStageClick);
    };
  }, []);

  useEffect(() => {
    socketRef.current = io('http://localhost:4000');

    socketRef.current.on('initialImages', (initialImages) => {
      setImages(initialImages);
    });

    socketRef.current.on('updateImages', (updatedImages) => {
      console.log(updatedImages);
      setImages(updatedImages);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  console.log(images);
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ width: '100%', height: '100vh', border: '1px solid black' }}
    >
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        draggable
        scaleX={scale}
        scaleY={scale}
        x={stagePos.x}
        y={stagePos.y}
        onWheel={handleWheel}
      >
        <Layer>
          {images.map((image) => (
            <URLImage
              key={image.id}
              src={image.src}
              x={image.x}
              y={image.y}
              width={image.width}
              height={image.height}
              isSelected={selectedId === image.id}
              onSelect={() => handleSelect(image.id)}
              onChange={(newAttrs) => handleChange(image.id, newAttrs)}
              onDragStart={handleImageDragStart}
              onDragEnd={handleImageDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasApp;
