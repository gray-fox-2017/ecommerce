var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var cors = require ('cors')
const mongoose = require('mongoose')
const uri = 'mongodb://medieval:medieval@ds157641.mlab.com:57641/ecommerce'
mongoose.connect(uri)
var db = mongoose.createConnection(uri)

var app = express();
 
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/', index);

// catch 404 and forward to error handler
module.exports = app;
