const mongoose = require ('mongoose')
const Schema = mongoose.Schema

var itemSchema = new Schema({
  name: String,
  picture: String,
  stock: Number,
  category: String,
  price: String
})

var Item = mongoose.model('Item',itemSchema)

module.exports = Item
