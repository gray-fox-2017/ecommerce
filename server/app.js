var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')

mongoose.Promise = require('bluebird');

var items = require('./routes/items')
var customers = require('./routes/customers')
var carts = require('./routes/carts')

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use('/api/items', items)
app.use('/api/customers', customers)
app.use('/api/carts', carts)

app.listen(3000, function(){
  console.log("Connected to Port 3000")
})

