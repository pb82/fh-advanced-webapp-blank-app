var express = require('express');
$fh = require('fh-api');
var mainjs = require('main.js');

var app = express();

app.use(express.static(__dirname + '/public'));

module.exports = app.listen(process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001);