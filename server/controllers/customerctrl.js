var Customer = require('../models/customer');
var bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALT_ROUNDS);

var create = function(req, res) {
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt)
  let newCust = new Customer({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    role: req.body.role
  })
  newCust.save((err, createdUser) => {
    res.send(err ? err : createdUser);
  })
}

var get = function(req, res) {
  Customer.find({}, function (err, custs) {
    res.send(err ? err : custs)
  });
}

var getOne = function(req, res) {
  Customer.find({_id: req.params.id}, (err, cust) => {
    res.send(err ? err : cust)
  })
}

var update = function(req, res) {
  Customer.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, cust) => {
    res.send(err ? err : cust)
  })
}

var remove = function(req, res) {
  Customer.findOneAndRemove({_id: req.params.id}, (err, cust) => {
    res.send(err ? err : cust)
  })
}

module.exports = {
  create, get, getOne, update, remove
};