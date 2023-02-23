const express = require('express');
const router = express.Router();
const { getBooks, getBook, createBook } = require('../controller/booksController');
console.log("6.");
router.get('/books', async(req,res)=> {
    console.log('Inside get');
    await res.status(200).json({
        "message":"Hello",
    });
})
router.route('/api/v1/books').get(getBooks);
router.route('/api/v1/books/:bookId').get(getBook);

router.route('/api/v1/books').post(createBook);

module.exports = router;