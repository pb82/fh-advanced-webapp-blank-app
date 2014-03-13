var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

// Used for App health checking
app.get('/sys/info/ping', function(req, res, next) {
  res.end('"OK"');
});

module.exports = app.listen(process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001);
