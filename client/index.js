var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(err, req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  app.use(express.static(path.join(__dirname, 'app')));
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.post('/participants', function(req, res) {
  var options = {
    host: 'server',
    path: '/participants',
    port: '4567',
    method: 'POST'
  };

  var request_body = JSON.stringify(Object.keys(req.body));
  console.log('body: ' + request_body);

  var post_req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        console.log('Response: ' + chunk);
      });
  });
  post_req.write(request_body);
  post_req.end();
});

app.listen(8080);
console.log('Running on http://localhost:' + 8080);
