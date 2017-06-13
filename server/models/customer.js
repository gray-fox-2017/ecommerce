const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})
const Customer = mongoose.model('Customer', customerSchema )

module.exports = Customer;
