const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // You can choose a different port if needed

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the main page to serve the index.html from the 'public/homepage' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
