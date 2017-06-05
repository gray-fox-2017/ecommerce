var Cart = require('../models/cart')

module.exports = {
  getAll : (req, res)=>{
    Cart.find({})
    .populate('itemlist')
    .exec((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  getOne : (req, res)=>{
    Cart.findOne({_id : req.params.id})
    .populate('itemlist')
    .exec((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    var date = new Date()
    var insertCart = new Cart({
      total : req.body.total,
      customer : req.body.customer,
      itemlist : req.body.itemlist
    })
    insertCart.save((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  delete : (req, res)=>{
    Cart.remove({_id : req.params.id}, (err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  update : (req, res)=>{
    Cart.findById(req.params.id, (err, query) => {
      if (err) res.send(err)
      Cart.updateOne({
        _id: query._id
      }, {
        $set: {
          total : req.body.total || query.total,
          customer : req.body.customer || query.customer,
          itemlist : req.body.itemlist || query.itemlist,
          createdAt : query.createdAt,
          updateAt : new Date()
        }
      }, (err, result) => {
        if (err) res.send(err)
        res.send(result)
      })
    })
  },
  additemlist : (req, res)=>{
    Cart.findById(req.params.id, (err, query) => {
      if (err){ 
        res.send(err)
      }
      else{
        var list = query.itemlist
        list.push(req.body.itemlist)
        Cart.updateOne({
          _id: query._id
        }, {
          $set: {
            itemlist : list
          }
        }, (err, result) => {
          if (err) res.send(err)
          res.send(result)
        })
      }
    })
  }
}
