const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '.')));

// Fallback to index.html for SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${8000}`);
});