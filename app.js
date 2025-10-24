const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello from my ADVANCED Pipeline! (v1.0)');
});

// This is a function we can test
function add(a, b) {
  return a + b;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app, add }; // Export for testing