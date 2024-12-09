const express = require('express');

const app = express();

const googleRouterFile = require('./google.route.js');

app.use('/livebooks', googleRouterFile);

app.get('/home', (req, res) => {
  return res.send('Welcome to backend');
});

// :8080/livebooks

app.listen(8080, () => {
  console.log('8080 running server');
});
