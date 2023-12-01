const express = require('express');
const http = require('http'); // import http
const socketIO = require('socket.io'); // import socket.io
const app = express();
const server = http.createServer(app); // create server
const io = socketIO(server); // create socket using server
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const route = require('./routes/route');
const cors = require("cors");
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database!');
}).catch(() => {
    console.log('Connection failed!');
});
app.use("/social/api/v1", route);


// Listen for socket connections
io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Listen for private messages
    socket.on('private_message', (data) => {
        console.log("data==>",data);
      // Emit the private message to the target user
      io.to(data.targetUserId).emit('private_message', {
        senderUserId: socket.id,
        message: data.message,
      });
    });
  
    // Listen for disconnections
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

