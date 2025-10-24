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

// This 'if' statement checks if the file is being run
// directly with "node app.js".
// If it is, start the server.
// If it's being "required" by a test, it will NOT run.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// We still export the app and functions for testing
module.exports = { app, add };