const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const keys = require('./config/keys')
const setupDB = require('./utils/db');
const routes = require('./routes');

const {port} = keys;
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
const server = app.listen(port,'0.0.0.0', () => {
    console.log("Server is running at port " + port)
})