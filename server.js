var express = require('express');
var app = express();



var http = require('http').Server(app);

app.use(express.static(__dirname));

http.listen(3000, function(){
  console.log('listening on port 3000');
})