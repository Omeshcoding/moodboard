/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Image, Rect, Text, Transformer } from 'react-konva';

// eslint-disable-next-line react/prop-types
const URLImage = ({
  src,
  x,
  y,
  width,
  height,
  isSelected,
  onSelect,
  votes,
  onVote,
  onChange,
}) => {
  const [image, setImage] = useState(null);
  const shapeRef = useRef(null);
  const transformRef = useRef(null);

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
      transformRef.current.nodes([shapeRef.current]);
      transformRef.current.getLayer().batchDraw();
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
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => newBox}
        />
      )}
      <Text
        text={`Votes: ${votes && votes}`}
        x={x}
        y={y - 20}
        fontSize={16}
        fill="black"
      />
      <Rect
        x={x}
        y={y + height + 10}
        width={100}
        height={30}
        fill="#eee"
        cornerRadius={5}
        onClick={onVote}
        onTap={onVote}
      />
      <Text
        text="Vote"
        x={x + 32}
        y={y + height + 18}
        fontSize={16}
        fill="black"
        onClick={onVote}
        onTap={onVote}
      />
    </>
  );
};

export default URLImage;
