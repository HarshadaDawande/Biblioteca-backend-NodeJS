const express = require('express');
const server = express();
const dotenv = require('dotenv');

const hostname = '127.0.0.1';
dotenv.config({ path: './config/config.env' })

const connectDatabase = require('./db/mysqlconnect.js');
connectDatabase();

const books = require('./routes/books');

server.use(books);

const port = process.env.PORT;
server.listen(port, hostname, () => {
    console.log(`Server running at ${port} in ${process.env.NODE_ENV} mode`);
});
