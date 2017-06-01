var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cartsSchema = new Schema({
  memberid: String,
  total: Number,
  itemlist: [{ type: Schema.Types.ObjectId, ref: 'Items' }]
});

var Carts = mongoose.model('Carts', cartsSchema);

module.exports = Carts;
