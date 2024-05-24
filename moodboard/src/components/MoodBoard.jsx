import React, { useState } from 'react';
import Canvas from './Canvas';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Ensure this matches your server's address

const MoodBoard = () => {
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState('');

  const addImage = (e) => {
    e.preventDefault();
    setImages([...images, url]);
    socket.emit('addImage', url);
    setUrl('');
  };

  return (
    <div>
      <form onSubmit={addImage}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Add Image</button>
      </form>
      <Canvas images={images} />
    </div>
  );
};

export default MoodBoard;
