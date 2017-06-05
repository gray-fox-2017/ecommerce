var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(url);

var Schema = mongoose.Schema;

var CartsSchema = new Schema ({
  date: {
    type: Date,
    default: Date.now
  },
  itemlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Items'
    }
  ],
  customerlist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Customers'
    }
  ]
})

var Carts = mongoose.model('Carts', CartsSchema);

module.exports = Carts;
