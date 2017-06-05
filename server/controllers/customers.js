var Customer = require('../models/customer')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  signin : (req, res)=>{
    Customer.findOne({
        username : req.body.username
    })
    .then((query)=>{
      if(bcrypt.compareSync(req.body.password, query.password)){
          var token = jwt.sign({
            id : query._id,
            name : query.name,
            username : query.username,
          },'secret', {expiresIn : '1h'})
          res.send({token : token, msg : "Sukses"})
      }
    })
  },
  signup : (req, res)=>{
    Customer.findOne({
        username : req.body.username
    })
    .then((query)=>{
      if(query){
        res.send("Username is already exist")
      }else{
        Customer.create({
          name : req.body.name,
          username : req.body.username,
          password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        })
        .then((result)=>{
          res.send(result)
        })
        .catch((err)=>{
          res.send(err)
        })
      }
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  getAll : (req, res)=>{
    Customer.find({}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getOne : (req, res)=>{
    Customer.findOne({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    var insertCustomer = new Customer({
      name : req.body.name,
      username : req.body.username,
      password : req.body.password
    })
    insertCustomer.save((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  delete : (req, res)=>{
    Customer.remove({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  update : (req, res)=>{
    Customer.findById(req.params.id, (err, query) => {
      if (err) res.send(err)
      Customer.updateOne({
        _id: query._id
      }, {
        $set: {
          name : req.body.name || query.name,
          username : req.body.username || query.username,
          password : req.body.password || query.password,
          createdAt : query.createdAt,
          updateAt : new Date().toISOString()
        }
      }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
      })
    })
  }
}
