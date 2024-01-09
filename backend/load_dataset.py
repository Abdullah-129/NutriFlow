import pandas as pd
import sys
import json

# Get the CSV file path from the command-line arguments
csv_file = sys.argv[1]

# Load the dataset from the CSV file
dataset = pd.read_csv(csv_file)  # Use 'csv_file' instead of 'dataset.csv'

# Convert the dataset to JSON and print it
dataset_json = dataset.to_json(orient='records')
print(dataset_json)
