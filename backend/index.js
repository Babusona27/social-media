const express = require('express');
const http = require('http'); // import http
const socketIO = require('socket.io'); // import socket.io
const app = express();
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




const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});


io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id);

  // join room
  socket.on('joinRoom', ({ room }) => {
    socket.join(room);
  });

  // listen for private message
  socket.on('private message', ({ room, message }) => {
    console.log("server message", message);
    socket.to(room).emit('private message', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected: ' + socket.id);
  });
});

