var express = require('express');
var lib = require('../common/lib');
var app = express();

app.use('/', express.static(__dirname + '/../client'))

app.get('/hello', function(req, res){
  res.send('' + lib.hello());
});

app.listen(1337);
