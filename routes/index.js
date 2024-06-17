// routes/index.js
const express = require('express');
const router = express.Router();
const content = require('../data/content.json');

// Home route
router.get('/', (req, res) => {
    res.render('index', { content: content });
});

module.exports = router;
