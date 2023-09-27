const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an Express app
const app = express();
const server = http.createServer(app);

// Create a Socket.io instance and attach it to the server
const io = socketIo(server);

// Define a route to serve your HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Define a connection event handler
io.on('connection', (socket) => {
  console.log('A user connected');

  // Define custom events for handling client-server communication
  socket.on('chat message', (message) => {
    console.log(`Message: ${message}`);
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
