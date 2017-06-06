var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce');

var Schema = mongoose.Schema;

var ItemsSchema = new Schema ({
  name: String,
  price: Number,
  author: String,
  category: String,
  stock: Number,
  pict: String,
  rating: String
})
var Items = mongoose.model('Items', ItemsSchema);

module.exports = Items;
