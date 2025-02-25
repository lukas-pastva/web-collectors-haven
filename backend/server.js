const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const YAML = require('yamljs');

const app = express();
app.use(cors());

// Serve images statically from the "public/images" folder
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Load the YAML database
const yamlFilePath = path.join(__dirname, 'items.yaml');
let items = [];

if (fs.existsSync(yamlFilePath)) {
  items = YAML.load(yamlFilePath);
} else {
  console.error('YAML file not found:', yamlFilePath);
}

// GET endpoint to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Collector's Haven backend running on port ${PORT}`);
});
