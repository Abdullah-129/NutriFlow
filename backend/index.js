const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

// Read your dataset from a CSV file
const dataset = [];

fs.createReadStream('dataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    dataset.push(row);
  })
  .on('end', () => {
    console.log('Dataset loaded successfully.');
  });

// Function to calculate BMI
function calculateBMI(weight, height) {
  const h = height * height;
  const w = weight / h;
  const bmi = w;
  return bmi;
}

// Function to calculate the diet plan based on user input
function calculateDietPlan(age, weight, height, gender, goal) {
  // Calculate BMI
  const bmi = calculateBMI(weight, height);

  // Filter the dataset based on user's criteria
  const filteredData = dataset.filter((row) => {
    return row.goal === goal;
  });

  if (filteredData.length === 0) {
    return {
      dietPlan: 'No diet plan found for this input.',
      bmi: bmi,
    };
  }

  // Return the diet plan and BMI for the top result (there might be multiple matching records)
  return {
    dietPlan: filteredData[0].diet_plan,
    bmi: bmi,
  };
}

app.post('/api/diet-plan', (req, res) => {
  const { age, weight, height, gender, goal } = req.body;
  const result = calculateDietPlan(age, weight, height, gender, goal);
  res.json(result);
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
