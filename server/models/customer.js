var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var customerSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Mohon masukkan nama anda']
    },
    username: {
      type: String,
      required: [true, 'Mohon masukkan username anda'],
      minlength: [5, 'Username minimal terdiri dari lima karakter'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Mohon masukkan kata sandi anda']
    },
    role: String
});

customerSchema.plugin(uniqueValidator);

var Customer  = mongoose.model('Customer', customerSchema);

module.exports = Customer;