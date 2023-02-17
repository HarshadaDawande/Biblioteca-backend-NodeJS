const express = require('express');
const app = express();


const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' })

const books = require('./routes/books');
app.use(books);

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
    console.log(`Server running at ${port} in ${process.env.NODE_ENV} mode`);
});
