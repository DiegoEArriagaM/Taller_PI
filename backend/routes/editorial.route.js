const express = require('express');
const router = express.Router();

const {
    read_editorial
} = require('../controllers/editorial.controller');

router.route('/editorial').get(read_editorial);

module.exports = router;