var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
      type: String,
      required: [true, "Book's title can't be empty!"],
      minlength: [2, 'Book title too short!']
    },
    author: String,
    genre: String,
    price: Number,
    stock: Number,
    image: String
});

var Book  = mongoose.model('Book', bookSchema);

module.exports = Book;