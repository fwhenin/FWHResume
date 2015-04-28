/**
 * Created by fwhenin on 4/27/15.
 */

var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.sendfile('resume.html');
});

app.listen(process.env.PORT || 3000);