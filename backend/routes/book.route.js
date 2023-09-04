const express = require('express');
const router = express.Router();

const {
    create_book,
    read_book,
    update_book,
    delete_book
} = require('../controllers/book.controller');

router.route('/book').post(create_book).get(read_book).put(update_book).delete(delete_book);

module.exports = router;