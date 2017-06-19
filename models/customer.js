const mongoose = require('mongoose');
require('mongoose-type-email');
var uniqueValidator = require('mongoose-unique-validator');

var customerSchema = mongoose.Schema({
  username:{
    type:String,
    required:[true,'username is required, must not empty'],
    unique:true,
    uniqueCaseInsensitive: true,
    validate: {
      validator: function(input) {
        return /.{5,}/.test(input);
      },
      message: '{VALUE} username must be 5 character or more'
    }
  },
  email:{
    type:mongoose.SchemaTypes.Email,
    required:[true,'email is required, must not empty'],
    unique:true,
    uniqueCaseInsensitive: true
  },
  password:{
    type:String,
    required:[true,'password is required, must not empty']
  }
}).plugin(uniqueValidator, { message: '{PATH} existed' })

var Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer;