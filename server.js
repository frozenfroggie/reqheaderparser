var express = require("express");
var app = express();

var ip = require("ip");
app.get('/', function(req, res) {
    var info = {
         'ipaddress':  req.headers['x-forwarded-for'],
         'language': req.headers["accept-language"].split(',')[0],
         'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
  res.json(info);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node listening on port: ' + port);
});