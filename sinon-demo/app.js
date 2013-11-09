// config
var PORT = 8000;

// deps
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

var server = app.listen(PORT);


// let's rock
console.log("Application started on port : " + PORT);