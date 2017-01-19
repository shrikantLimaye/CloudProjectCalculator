var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
//var host = process.env.HOST || '0.0.0.0';
app.use(express.static(__dirname)).listen(port,null);
console.log("Server running on port 3000");