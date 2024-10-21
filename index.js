const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const products = require('./dev-data/data.json'); // Import JSON data

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Products API!');
});

// API endpoint to get all products
app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
