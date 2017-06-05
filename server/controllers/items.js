var Item = require('../models/item')

module.exports = {
  getAll : (req, res)=>{
    Item.find({}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getOne : (req, res)=>{
    Item.findOne({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    var insertItem = new Item({
      name : req.body.name,
      description : req.body.description,
      price: req.body.price,
      img : req.body.img
    })
    insertItem.save((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  delete : (req, res)=>{
    Item.remove({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  update : (req, res)=>{
    Item.findById(req.params.id, (err, query) => {
      if (err) res.send(err)
      Item.updateOne({
        _id: query._id
      }, {
        $set: {
          name: req.body.name || query.name,
          description: req.body.description || query.description,
          img: req.body.img || query.img,
          price: req.body.price || query.price,
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
