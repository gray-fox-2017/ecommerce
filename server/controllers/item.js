var models = require('../models/Items');

module.exports = {
  createData : function(req, res, next){
    //console.log(req.body)
    models.create({
      name: req.body.name,
      price: Number(req.body.price),
      author: req.body.author,
      category: req.body.category,
      stock: Number(req.body.stock),
      pict: req.body.pict,
      rating: req.body.rating
    }, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findAll: (req, res, next)=>{
    models.find({}, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  findOne: (req, res, next)=>{
    models.findById(req.params.id, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  updateById: (req, res, next)=> {
    models.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {
      new: true
    }).exec ((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  deleteById: (req, res, next)=>{
    models.findByIdAndRemove(req.params.id)
    .exec((err, result)=>{
      if(!err){
        res.send('data deleted')
      } else {
        res.send(err)
      }
    })
  },
  findByCategory: (req, res, next)=>{
    models.findAll({
      category: req.body.category
    }, (err, data)=>{
      if(!err){
        re.send(data)
      } else {
        res.send(err)
      }
    })
  }
}
