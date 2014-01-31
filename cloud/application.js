var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

module.exports = app.listen(process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001);