var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
var port = process.env.PORT || 80;

app.use(bodyParser.json({ type : '*/*' }));
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

  var request_body = JSON.stringify(req.body);
  console.log('body: ' + request_body);

  var post_req = http.request(options, function(res) {
      res.setEncoding('utf8');
      console.log('status: ' + res.statusCode);
      console.log('headers: ' + JSON.stringify(res.headers));
  });
  post_req.write(request_body);
  post_req.end();

  res.end("Success!");
});

app.listen(port);
console.log('Running on http://localhost:' + port);
