const models = require('../models/Carts');

module.exports = {
  createData: (req, res, next)=>{
    models.create(req.body, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findAll: (req, res, next)=>{
    models.find({})
    .populate('itemlist', 'customerlist')
    .exec((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findOne: (req, res, next)=>{
    models.findById(req.params.id)
    .populate('item')
    .populate('customer')
    .exec((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  updateById: (req, res, next)=>{
    models.findByIdAndUpdate(req.params.id, {
      $set: {
        date: new Date().toISOString(),
        item: req.body.item,
        customer: req.body.customer
      }
    }, {
      new: true,
    })
    .exec((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  deleteById: (req, res, next)=>{
    models.findByIdAndRemove(req.params)
    .exec((err, result)=>{
      if(!err){
        res.send('data deleted!')
      } else {
        res.send(err)
      }
    })
  }
}
