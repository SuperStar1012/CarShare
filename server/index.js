const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const keys = require('./config/keys')
const setupDB = require('./utils/db');
const routes = require('./routes');
const socketIo = require('socket.io');
const http = require('http');

const { port } = keys;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    helmet({
        contentSecurityPolicy: false,
        frameguard: true
    })
);
app.use(cors());

setupDB();

app.use(routes);
const ioServer = http.createServer(app)
const io = socketIo(ioServer);
io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('updateLocation', (data) => {
        console.log('Received location:', data);
        // Broadcast the location to all connected clients
        // io.emit('updateLocation', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const server = ioServer.listen(port, '0.0.0.0', () => {
    console.log("Server is running at port " + port)
})

