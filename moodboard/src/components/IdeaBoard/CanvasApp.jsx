import { Layer, Stage } from 'react-konva';
import URLImage from './URLImage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const CanvasApp = () => {
  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [scale, setScale] = useState(1);
  const [stagePos, setStagePos] = useState({ x: 0, y: 0 });
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const stageRef = useRef(null);
  const socketRef = useRef(null);
  const fileInputRef = useRef(null);

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
          votes: 0,
        };

        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        socketRef.current.emit('updatedImages', updatedImages);
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

  const handleImageUpload = (e) => {
    const stage = stageRef.current;
    const files = e.target.files;
    const file = files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newImage = {
        src: reader.result,
        x: stage.getPointerPosition()?.x || window.innerWidth / 2,
        y: stage.getPointerPosition()?.y || window.innerWidth / 2,
        id: `img${images.length + 1}`,
        width: 100,
        height: 100,
      };

      const updatedImages = [...images, newImage];
      setImages(updatedImages);
      socketRef.current.emit('updatedImages', updatedImages);
    };
    reader.readAsDataURL(file);
  };

  const handleVote = (id) => {
    const updatedImages = images.map((image) => {
      return image.id === id ? { ...image, votes: image.votes + 1 } : image;
    });
    setImages(updatedImages);
    socketRef.current.emit('updateImages', updatedImages);
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
      setImages(updatedImages);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-[100vw] md:border-2 md:border-red-900 h-[100vh]"
    >
      <div className="">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="fixed rounded-md top-10 text-red-900 font-semibold border-black border-2"
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 10,
            padding: '10px 20px',
            fontSize: '16px',
          }}
        >
          Add Image
        </button>
      </div>
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
              key={image?.id}
              src={image?.src}
              x={image?.x}
              y={image?.y}
              width={image?.width}
              height={image?.height}
              isSelected={selectedId === image?.id}
              votes={image?.votes}
              onSelect={() => handleSelect(image.id)}
              onChange={(newAttrs) => handleChange(image.id, newAttrs)}
              onDragStart={handleImageDragStart}
              onDragEnd={handleImageDragEnd}
              onVote={() => handleVote(image.id)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasApp;
