const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
    costumer_id:String,
    member_id:String,
    days:Number,
    out_date:Date,
    due_date:Date,
    in_date:Date,
    fine:Number,
    // booklist:[{ type: String, ref: 'Book' }]
    booklist:[{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

var Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction;