const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  barcode: 'String',
  name : 'String',
  price : 'Number',
  category: 'String',
  stock: 'Number'
})
const Item = mongoose.model('Item', itemSchema )

module.exports = Item;
