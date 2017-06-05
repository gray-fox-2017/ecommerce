var mongoose = require('mongoose')
var Schema = mongoose.Schema
require('../config/db')

var itemSchema = new Schema({
		name : {type : String, required : true},
		description : {type : String, required : true},
		price : {type : Number, required : true},
		img : String
}, {timestamps : true})

var Item = mongoose.model('Item', itemSchema)
module.exports = Item
