const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001; // Change this line to use a different port

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});