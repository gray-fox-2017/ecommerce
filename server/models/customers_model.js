var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customersSchema = new Schema({
  memberid: String,
  username: String,
  password: String,
  role:     String,
  name:     String,
  address:  String,
  zipcode:  String,
  phone:    String
});

var Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;
