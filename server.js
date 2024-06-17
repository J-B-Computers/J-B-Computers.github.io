const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001; // Ensure no conflicts with this port

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        content: require('./assets/data/content.json')
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});