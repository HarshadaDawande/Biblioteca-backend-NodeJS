const express = require('express');
const Book = require('../model/book');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/test', auth, (req, res) => {
    res.send('This is from other router');
});

router.get('/books', (req, res) => {
    Book.find({}).then((books) => {
        res.send(books)
    }).catch((e) => {
        res.status(500).send(e)
    });
})

router.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;