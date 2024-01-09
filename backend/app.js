const express = require('express');
const app = express();
const { PythonShell } = require('python-shell');

// Define a route to serve the dataset
app.get('/api/dataset', (req, res) => {
  // Use PythonShell to run a Python script that loads the dataset and converts it to JSON
  const options = {
    scriptPath: __dirname, // Set the path to your Python script
    args: ['dataset.csv'], // Pass the CSV file as an argument
  };

  PythonShell.run('load_dataset.py', options, (err, data) => {
    if (err) {
      console.error('Error loading dataset:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const dataset = JSON.parse(data[0]);
      res.json(dataset);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
