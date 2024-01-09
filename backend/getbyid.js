const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 4002;
app.use(cors());
app.options('*', cors());

// Set up a MySQL connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'diet',
});

// Establish the MySQL connection
conn.connect((err) => {
  if (err) {
    console.error('Connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define a route to serve a single product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'SELECT * FROM products WHERE id = ?';

  conn.query(sql, [productId], (err, results) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      // If no product is found with the given ID
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    const product = {
      id: results[0].id,
      image: results[0].image,
      image2: results[0].image2,
      image3: results[0].image3,
      cat: results[0].cat,
      title: results[0].title,
      description: results[0].description,
      price: results[0].price,
    };

    res.json(product);
  });
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
