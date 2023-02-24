const { number, string } = require('joi');
const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
    id: {
        $inc: 1,
        type: Number,
        required: true
    },
    isbn: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
    }
});

module.exports = Book;