var mongoose = require('mongoose')
var Schema = mongoose.Schema
require('../config/db')

var cartSchema = new Schema({
	total : {type: Number, required:true},
	customer : { type: Schema.Types.ObjectId, ref: 'Customer' },
  	itemlist : [{ type: Schema.Types.ObjectId, ref: 'Item' }]
}, {timestamps : true})

var Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
