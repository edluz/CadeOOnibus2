var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var olhovivoRouter = require('./routes/olhovivo');
const exp = require('constants');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static('public'));
app.use('/olhovivo', olhovivoRouter);

module.exports = app;
