var mongoose = require('mongoose')
var Schema = mongoose.Schema
require('../config/db')

var customerSchema = new Schema({
  name : {type : String, required : true},
  email : {type : String, match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email'], required : true},
  username : {type : String, required : true},
  password : {type : String, required : true},
}, {timestamps : true})

var Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer
