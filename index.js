'use strict';
require("express");
var express = require('express');
var app = express();



app.set('view engine', 'ejs');
app.use('/', express.static(__dirname));


app.get('/', function (req, res) {	
	
    res.render('page/index');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});