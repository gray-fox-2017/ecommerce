const Items = require('../models/items_model');

function getAll(req, res) {
  Items.find({}, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Items.find({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following record:");
    console.log(result);
    res.send(result);
  });
}

function createItem(req, res) {
  Items.create({
    name:         req.body.name,
    description:  req.body.description,
    price:        req.body.price,
    category:     req.body.category,
    stock:        req.body.stock,
    image:        req.body.image
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteItem(req, res) {
  Items.remove({
    '_id': req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete:");
    console.log(result);
    res.send(result);
  });
}

function updateItem(req, res) {
  Items.find({
    _id: req.params.id
  }, function(err, item) {
    Items.update({
      _id: item[0]._id
    }, {
      $set: {
        name:         req.body.name || item[0].name,
        description:  req.body.description || item[0].description,
        price:        req.body.price || item[0].price,
        category:     req.body.category || item[0].category,
        stock:        req.body.stock || item[0].stock,
        image:        req.body.image || item[0].image
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}

module.exports = {
  getAll, getSingle, createItem, deleteItem, updateItem
}
