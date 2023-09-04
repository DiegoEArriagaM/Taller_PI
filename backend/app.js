const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Create Express server
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/book.route'));
app.use('/api', require('./routes/editorial.route'));

// Port assignment
const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = {
    app,
    server,
};