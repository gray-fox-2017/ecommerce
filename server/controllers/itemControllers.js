const ObjectId = require('mongodb').ObjectId;
const itemModel = require('../models/item')

const addItem = function(req,res) {
  itemModel.create({
    barcode : req.body.barcode,
    name : req.body.name,
    price : req.body.price,
    category : req.body.category,
    stock : req.body.stock
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const getAll = function(req,res) {
  itemModel.find({},
  function (err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const updateItem = function(req,res) {
  itemModel.findOne({
    _id : ObjectId(req.params.id)
  }, function(err,result) {
    if (err) {
      res.send(err)
    } else {
      result.barcode = req.body.barcode || result.barcode
      result.name = req.body.name || result.name
      result.price = req.body.price || result.price
      result.category = req.body.category || result.category
      result.stock = req.body.stock || result.stock
      result.save(function(err,result) {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

const deleteItem = function(req,res) {
  itemModel.deleteOne({
    _id : ObjectId(req.params.id)
  },function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send(` Delete item with id ${req.params.id} success`)
    }
  })
}

module.exports = {
  addItem,
  getAll,
  updateItem,
  deleteItem
};
