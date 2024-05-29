/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Image, Transformer } from 'react-konva';

// eslint-disable-next-line react/prop-types
const URLImage = ({
  src,
  x,
  y,
  width,
  height,
  isSelected,
  onSelect,
  onChange,
}) => {
  const [image, setImage] = useState(null);
  const shapeRef = useRef(null);
  const trRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.addEventListener('load', () => {
      setImage(img);
    });

    return () => {
      img.removeEventListener('load', () => {
        setImage(null);
      });
    };
  }, [src]);

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        x={x}
        y={y}
        image={image}
        draggable
        ref={shapeRef}
        width={width}
        height={height}
        onClick={onSelect}
        onTap={onSelect}
        alt="img"
        onDragEnd={(e) => {
          onChange({
            x: e.target.x(),
            y: e.target.y(),
            width: e.target.width(),
            height: e.target.height(),
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY,
          });
        }}
      />
      {isSelected && (
        <Transformer ref={trRef} boundBoxFunc={(oldBox, newBox) => newBox} />
      )}
    </>
  );
};

export default URLImage;
