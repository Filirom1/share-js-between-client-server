var express = require('express');
var lib = require('../common/lib');
var app = express();

app.use('/', express.static(__dirname + '/../client'))
app.use('/js/common', express.static(__dirname + '/../common'))

app.get('/hello', function(req, res){
  res.send('' + lib.hello());
});

app.listen(1337);
