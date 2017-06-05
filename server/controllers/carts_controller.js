const Carts = require('../models/carts_model');

function getAll(req, res) {
  Carts.find().populate('itemlist')
  .exec(function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function getSingle(req, res) {
  Carts.find(req.params.id).populate('itemlist')
  .exec(function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Found the following records:");
    console.log(result);
    res.send(result);
  });
}

function createTrans(req, res) {
  Carts.create({
    memberid: req.body.memberid,
    total:    req.body.total,
    itemlist: req.body.itemlist
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Insert:");
    console.log(result);
    res.send(result);
  });
}

function deleteTrans(req, res) {
  Carts.remove({
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

function updateTrans(req, res) {
  Carts.find({
    _id: req.params.id
  }, function(err, item) {
    Carts.update({
      _id: item[0]._id
    }, {
      $set: {
        memberid: req.body.memberid || item[0].memberid,
        total:    req.body.total || item[0].total,
        itemlist: req.body.itemlist || item[0].itemlist
      }
    }, (err, result) => {
      if (err) return res.send(err.message)
        res.send(result);
    });
  });
}

module.exports = {
  getAll, getSingle, createTrans, deleteTrans, updateTrans
}
