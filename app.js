const express = require('express');
require('./db/mongoose');

const app = express();
const bookRouter = require('./routes/book_router')

app.use(express.json());
app.use(bookRouter);

const bcryptjs = require('bcryptjs');

const encryptPassword = async() => {
    const password = 'Password123';
    const hashedPassword = await bcryptjs.hash(password, 8);

    const isMatch = bcryptjs.compare('Password123!', hashedPassword);
}

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' })
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';
app.listen(port, hostname, () => {
    console.log(`Server running at ${port} in ${process.env.NODE_ENV} mode`);
});

encryptPassword();