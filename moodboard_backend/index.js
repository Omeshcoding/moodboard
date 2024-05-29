const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // Allow all origins for simplicity
  },
});

let images = [];

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('draw', (data) => {
    io.emit('draw', data);
  });

  // Send the current images to the new user
  socket.emit('initialImages', images);

  // Handle image updates
  socket.on('updateImages', (updatedImages) => {
    images = updatedImages;
    socket.broadcast.emit('updateImages', images);
  });

  socket.on('addImage', (data) => {
    io.emit('addImage', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
