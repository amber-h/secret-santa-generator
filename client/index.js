var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  app.use(express.static(path.join(__dirname, 'app')));
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(80);
console.log('Running on http://localhost:' + 80);
