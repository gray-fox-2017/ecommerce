var mongoose = require('mongoose');
var url = 'mongodb://localhost/myShoppingApp'
mongoose.connect(url);
const Item = require('../models/item')

module.exports = {
  findAll:(req,res)=>{
    Item.find((err,data)=>{
      if(data.length>0){
        res.send(data)
      } else {
        res.send('currently there are no items available')
      }
    });
  },
  create:(req,res)=>{
    let item = new Item({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      category:req.body.category,
      stock:req.body.stock,
      image_url:req.body.image_url
    })
    item.save((err,itemResult)=>{
      if(!err){
        res.send(itemResult)
      } else {
        res.send(err.message)
      }
    })
  },
  update:(req,res)=>{
    Item.findById(req.params.id,(err,item)=>{
      if(err){
        res.send('ID not found')
      } else {
        item.name=req.body.name||item.name,
        item.description=req.body.description||item.description,
        item.price=req.body.price||item.price,
        item.category=req.body.category||item.category,
        item.stock=req.body.stock||item.stock,
        item.image_url=req.body.image_url||item.image_url
        item.save((err,updatedItem)=>{
          if(!err){
            res.send(updatedItem)
          } else {
            res.send(err.message)
          }
        })
      }
    })
  },
  delete:(req,res)=>{
    Item.deleteOne({_id:req.params.id},(err,result)=>{
      if(!err){
        res.send(`Successfully deleted from collection ${result}`)
      } else {
        res.send(err)
      }
    })
  }
};