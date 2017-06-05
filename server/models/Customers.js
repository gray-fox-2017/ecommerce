var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(url);

var Schema = mongoose.Schema;

var CustomersSchema = new Schema ({
  name: String,
  username: String,
  password: String,
  address: String,
  zipcode: String,
  phone: String,
  email: String
});

var Customers = mongoose.model('Customers', CustomersSchema);

module.exports = Customers;
