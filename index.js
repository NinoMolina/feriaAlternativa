var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/app'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static(__dirname + '/bower_components'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
  //'listening' listener
  console.log('server startup on port ' + port);
});