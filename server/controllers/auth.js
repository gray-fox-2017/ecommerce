require('dotenv').config();
const sec = process.env.TOKEN_SECRET;
const saltRounds = Number(process.env.SALT_ROUNDS);

var Customer = require('../models/customer');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ecommerce');

var login = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var token = req.body.token;

  if(!token) {
    Customer.findOne({ username: username }, function(err, customer) {
      if(err) res.send(err);
      if(customer) {
        bcrypt.compare(password, customer.password)
        .then(result => {
          if(result) {
            var token = jwt.sign({id: customer._id, username: customer.username }, sec);
            res.send(token)
          } else {
            res.send('Incorrect password');
          }
        })
        .catch(err => console.log(err))
      } else res.send('No such customer')
    })
  } else {
    res.send('You already have a token!')
  }
}

var signup = function(req, res, next) {
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt);
  let token = req.body.token;

  var newCustomer = new Customer({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    role: 'user'
  })
  newCustomer.save((err, customer) => {
    if(err) {
      res.send(err.errors)
    } else res.send(customer)
  })
}

var authCustomer = function(req, res, next) {
  let token = req.body.token

  if(token) {
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded.id == req.params.id) {
        next()
      } else {
        res.send('Route only for authorized customer only')
      }
    })
  } else {
    res.send('Not logged in')
  }
}

var allCustomer = function(req, res, next) {
  let token = req.body.token

  if(token) {
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded) {
        next()
      } else {
        res.send('Route only for authorized customer only')
      }
    })
  } else {
    res.send('Not logged in')
  }
}

var checkout = function(req, res, next) {
  var token = req.body.token;
  var cart = JSON.parse(req.body.cart);
  var total = req.body.total;

  if(token) {
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded) {
        var booklist = [];
        cart.forEach(item => {
          booklist.push(item._id);
        })
        var customer = decoded.id;

        req.body.booklist = booklist;
        req.body.customer = customer;
        req.body.total = total;
        next()
      } else {
        res.send('Route only for authorized customer only')
      }
    })
  } else {
    res.send('Not logged in')
  }
}

module.exports = {
  login, signup, authCustomer, allCustomer, checkout
};
