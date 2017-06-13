const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  memberid : String,
  out_date : Date,
  total_price : Number,
  itemlist : [{type : mongoose.Schema.ObjectId, ref : 'Item'}]
})
const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart;
