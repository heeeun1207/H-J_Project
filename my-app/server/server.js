const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express :5001! /');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(5001, () => {
  console.log('Express server is running on port 5001');
});
