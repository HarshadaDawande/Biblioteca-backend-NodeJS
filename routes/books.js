const express = require('express');
const router = express.Router();
const { getBooks, getBook } = require('../controller/booksController');

router.route('/api/v1/books').get(getBooks);
router.route('/api/v1/books/:bookId').get(getBook);

module.exports = router;