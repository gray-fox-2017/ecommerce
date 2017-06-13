const ObjectId = require('mongodb').ObjectId;
const cartModel = require('../models/cart')

const getAll = function(req,res) {
  cartModel.find()
  .populate('itemlist')
  .exec(function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const createCart = function(req,res) {
  cartModel.create({
    memberid : req.body.memberid,
    out_date : new Date(req.body.out_date),
    total_price : req.body.total_price,
    itemlist : req.body.itemlist.split(',')
  },function(err,result) {
    if (err) {
      res.send({msg: err})
    } else {
      res.send(result)
    }
  })
}

const deleteCart = function(req,res) {
  cartModel.deleteOne({
    _id : ObjectId(req.params.id)
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(`Delete cart with id ${req.params.id} success`)
    }
  })
}

const updateCart = function(req,res) {
  cartModel.findOne({
    _id : ObjectId(req.params.id)
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      result.memberid = req.body.memberid || result.memberid
      result.out_date = req.body.out_date || result.out_date
      result.total_price = req.body.total_price || result.total_price
      result.itemlist = req.body.itemlist || result.itemlist
      result.save(function(err,raw) {
        if (err) {
          res.send(err)
        } else {
          res.send(raw)
        }
      })
    }
  })
}

module.exports = {
  createCart,
  getAll,
  deleteCart,
  updateCart
};
