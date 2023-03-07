var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.get('/', function(req, res){
    res.render('index.html', { /*data*/ });
});