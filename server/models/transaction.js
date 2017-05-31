var mongoose = require('mongoose');
Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
    transaction_date: Date,
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    total: Number
});

var Transaction  = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;