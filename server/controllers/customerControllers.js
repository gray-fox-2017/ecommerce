const ObjectId = require('mongodb').ObjectId
const customerModel = require('../models/customer')

const createCustomer = function(req,res) {
  customerModel.create({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
      console.log("Add Customer Sukses");
    }
  })
}

const getAll = function(req,res) {
  customerModel.find({},function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const deleteCustomer = function(req,res) {
  customerModel.deleteOne({
    _id : ObjectId(req.params.id)
  },function(err) {
    if (err) {
      res.send(err)
    } else {
      res.send(`Delete id ${req.params.id}`)
    }
  })
}

const updateCustomer = function(req,res) {
  customerModel.findOne({
    _id : ObjectId(req.params.id)
  },function(err,result) {
    if (err) {
      res.send(err)
    } else {
      result.name = req.body.name || result.name
      result.memberid = req.body.memberid || result.memberid
      result.address = req.body.address || result.address
      result.zipcode = req.body.zipcode || result.zipcode
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

module.exports = {
  createCustomer,
  getAll,
  deleteCustomer,
  updateCustomer
};
