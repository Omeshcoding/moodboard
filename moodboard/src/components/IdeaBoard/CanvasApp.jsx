import { Layer, Stage } from 'react-konva';
import URLImage from './URLImage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Sidebar from '../Sidebar';
import { Menu, Plus, X } from 'lucide-react';
const CanvasApp = () => {
  const [images, setImages] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [show, setShow] = useState(false);
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
        votes: 0,
      };

      const updatedImages = [...images, newImage];
      console.log(updatedImages);
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

      const minX = Math.min(...images.map((img) => img.x));
      const minY = Math.min(...images.map((img) => img.y));
      const maxX = Math.max(...images.map((img) => img.x + img.width));
      const maxY = Math.max(...images.map((img) => img.y + img.height));

      const boxWidth = maxX - minX;
      const boxHeight = maxY - minY;

      const stage = stageRef.current;
      const scaleX = stage.width() / boxWidth;
      const scaleY = stage.height() / boxHeight;
      const newScale = Math.min(scaleX, scaleY) * 0.8;

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
  const boardsData = [
    {
      imgUrl: '/canvas1.png',
      title: 'Clothes',
    },
    {
      imgUrl: '/canvas2.png',
      title: 'Makeup Inspo',
    },
    {
      imgUrl: '/canvas3.png',
      title: 'Venues',
    },
    {
      imgUrl: '/canvas4.png',
      title: 'Venue 2',
    },
  ];

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-[100vw] h-[100vh]"
    >
      <button
        type="button"
        className={`mt-5 bg-[#770C15] p-3 rounded-md fixed sm:right-10 right-2 md:hidden z-50 ${
          !show && 'text-[#ede8e8]'
        }`}
        onClick={() => setShow(!show)}
      >
        {!show ? <Menu color="#ede8e8" /> : <X color="#ede8e8" />}
      </button>
      <div className="">
        <Sidebar
          title="InspireBoard"
          tags={['Theme', 'Clothes', 'Venues', 'Makeup']}
          boards={boardsData}
          show={show}
        />
        <div className="z-50 fixed w-40 bottom-36 right-10">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="fixed h-20 bottom-10 right-2 md:right-8 py-1 px-4  cursor-pointer rounded-md  bg-[#770C15] font-semibold border-2 hover:text-red-600  transition-all duration-600 ease-in-out "
          >
            <Plus strokeWidth={3} size={43} color="white" />
          </button>
        </div>
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
