const Items = require('../Models/items.js')
const jwt = require('jsonwebtoken')
const Storage = require('dom-storage')
const localStorage = new Storage('./db.json', {strict:false,ws:' '})
const Token = localStorage.getItem('myKey')
require('dotenv').config()

function list (req,res,next){
    Items.find({},function(err,result){
      res.send(result)
    })
  }
  
function createItem(req,res,next){
  Items.create({
    name: req.body.name,
    picture: req.body.picture,
    stock: req.body.stock,
    category: req.body.category
  },function(err,result){
    res.send(`${req.body.name} Created!`)
  })
}

function searchCategory (req,res,next){
      Items.find({
        category: req.body.category
      },function(err,result){
        res.send(result)
    })
  }

function deleteItem (req,res,next){
  Items.remove({
    _id: req.params.id
  },function(err,result){
    res.send('Delete Success!')
  })
}

function editItem (req,res,next){
  Items.findOne({
    _id: req.params.id
  },function(err,result){
    Items.updateOne({
      _id: req.params.id
    },{
      name: req.body.name || result.name,
      picture: req.body.picture || result.picture,
      stock: req.body.stock || result.stock,
      category: req.body.category || result.category,
      price: req.body.price || result.price
    },function(err,result){
      res.send('Update Success!')
    })
  })  
}

module.exports = {
  list,searchCategory,deleteItem,editItem,createItem
}