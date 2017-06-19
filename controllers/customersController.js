var mongoose = require('mongoose');
var url = 'mongodb://localhost/myShoppingApp'
mongoose.connect(url);
const Customer = require('../models/customer');
const simplecrypt = require('simplecrypt');

module.exports = {
  findAll:(req,res)=>{
    Customer.find((err,data)=>{
      console.log('Found these customers');
      if(data.length>0){
        res.send(data)
      } else {
        res.send('currently there are no customer available')
      }
    });
  },
  create:(req,res)=>{
    if(req.body.password){password=simplecrypt().encrypt(req.body.password)}else{password=req.body.password}
    let customer = new Customer({
      username:req.body.username,
      email:req.body.email,
      password:password
    })
    customer.save((err,resultcustomer)=>{
      if(!err){
        res.send(resultcustomer)
      } else {
        res.send(err.message)
      }
    })
  },
  update:(req,res)=>{
    if(req.body.password){password=simplecrypt().encrypt(req.body.password)}else{password=req.body.password}
    Customer.findById(req.params.id,{runValidators:true,context:'query'},(err,customer)=>{
      customer.username=req.body.username||customer.username,
      customer.email=req.body.email||customer.email,
      customer.password=password||customer.password
      customer.save((err,updatedcustomer)=>{
        if(!err){
          res.send(updatedcustomer)
        } else {
          res.send(err.message)
        }
      })
    })
  },
  delete:(req,res)=>{
    Customer.deleteOne({_id:req.params.id},(err,result)=>{
      if(!err){
        res.send(`Successfully deleted from collection ${result}`)
      } else {
        res.send(err)
      }
    })
  },
};