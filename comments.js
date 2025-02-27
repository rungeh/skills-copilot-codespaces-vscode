// Create web server
var express = require('express');
var app = express();

// Create root route
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Create comments route
app.get('/comments', function(req, res) {
  res.send('This is the comments route');
});

// Start web server on port 3000
app.listen(3000, function(){
  console.log('Server running on http://localhost:3000');
});