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
  socket.on('chatmessage', (message) => {
    console.log(`Message: ${message}`);
    // Broadcast the message to all connected clients
     io.emit('chatmessage', message);
  });

  //new_video_call
  socket.on('new_video_call', (data) => {
    console.log(`new_video_call: ${data}`);

    io.emit('new_video_call',data);
  });

  //typing
  socket.on('typing', (data) => {
    console.log(`typing: ${data}`);

    io.emit('typing',data);
  });

   //private_message
   socket.on('private_message', (data) => {
    console.log(`private_message: ${data}`);

    io.emit('private_message',data);
  });

   //on_user_loggedoff
   socket.on('on_user_loggedoff', (data) => {
    console.log(`on_user_loggedoff: ${data}`);

    io.emit('on_user_loggedoff',data);
  });

  //group_message
  socket.on('group_message', (data) => {
    console.log(`group_message: ${data}`);

    io.emit('group_message',data);
  });
   
   //page_message
   socket.on('page_message', (data) => {
    console.log(`page_message: ${data}`);

    io.emit('page_message',data);
  });

   //new_notification
   socket.on('new_notification', (data) => {
    console.log(`new_notification: ${data}`);

    io.emit('new_notification',data);
  });

   //typing_done
   socket.on('typing_done', (data) => {
    console.log(`typing_done: ${data}`);

    io.emit('typing_done',data);
  });


     //user_notification
     socket.on('user_notification', (data) => {
      console.log(`user_notification: ${data}`);
  
      io.emit('user_notification',data);
    });

        //create_video
        socket.on('create_video', (data) => {
          console.log(`create_video: ${data}`);
      
          io.emit('create_video',data);
        });


//event_notification
        socket.on('event_notification', (data) => {
          console.log(`event_notification: ${data}`);
      
          io.emit('event_notification',data);
        });

    //new_request
   socket.on('new_request', (data) => {
    console.log(`new_request: ${data}`);

    io.emit('new_request',data);
  });

  //checkout_notification
  socket.on('checkout_notification', (data) => {
    console.log(`checkout_notification: ${data}`);

    io.emit('checkout_notification',data);
  });

   //loadmore
   socket.on('loadmore', (data) => {
    console.log(`loadmore: ${data}`);

    io.emit('loadmore',data);
  });

  //join
  socket.on('join', (data) => {
    console.log(`join: ${data}`);

    io.emit('join',data);
  });

  //decline_call
  socket.on('decline_call', (data) => {
    console.log(`decline_call: ${data}`);

    io.emit('decline_call',data);
  });

    //seen_messages
    socket.on('seen_messages', (data) => {
      console.log(`seen_messages: ${data}`);
  
      io.emit('seen_messages',data);
    });

  //lastseen
  socket.on('lastseen', (data) => {
    console.log(`lastseen: ${data}`);

    io.emit('lastseen',data);
  });

  //count_unseen_messages
  socket.on('count_unseen_messages', (data) => {
    console.log(`count_unseen_messages: ${data}`);

    io.emit('count_unseen_messages',data);
  });

   //register_reaction
   socket.on('register_reaction', (data) => {
    console.log(`register_reaction: ${data}`);

    io.emit('register_reaction',data);
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
