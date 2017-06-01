const express = require('express');
var app = express()
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var cors = require('cors')

var books = require('./routes/books');
var customers = require('./routes/customers');
var transactions = require('./routes/transactions');
var index = require('./routes/index')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/books', books)
app.use('/api/customers', customers)
app.use('/api/transactions', transactions)
app.use('/', index)

app.listen(3000)