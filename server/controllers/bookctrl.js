var Book = require('../models/book');

var create = function(req, res) {
  var image;
  if(!req.body.image) {
    image = 'http://placehold.it/200x240'
  } else {
    image = req.body.image
  }
  let newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    price: req.body.price,
    image: image
  })
  newBook.save((err, createdBook) => {
    res.send(err ? err : createdBook);
  })
}

var get = function(req, res) {
  Book.find({}, function (err, books) {
    res.send(err ? err : books)
  });
}

var getOne = function(req, res) {
  Book.find({_id: req.params.id}, (err, book) => {
    res.send(err ? err: book)
  })
}

var update = function(req, res) {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, book) => {
    if(err) res.send(err.errors)
    res.send(book)
  })
}

var remove = function(req, res) {
  Book.findOneAndRemove({_id: req.params.id}, (err, book) => {
    if(err) res.send(err)
    res.send(book)
  })
}

module.exports = {
  create, get, getOne, update, remove
};