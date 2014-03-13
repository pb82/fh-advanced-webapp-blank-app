var express = require('express');
var corser = require("corser");

var app = express();
app.use(corser.create());

app.use(express.static(__dirname + '/public'));

app.options("*", function (req, res) {
  // CORS
  res.writeHead(204);
  res.end();
});

// Used for App health checking
app.get('/sys/info/ping', function(req, res, next) {
  res.end('"OK"');
});

module.exports = app.listen(process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001);
