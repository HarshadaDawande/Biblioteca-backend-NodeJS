const express = require('express');
const router = express.Router();
const { getBooks } = require('../controller/booksController');

router.route('/api/v1/books').get(getBooks);

module.exports = router;