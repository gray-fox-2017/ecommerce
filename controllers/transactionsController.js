var mongoose = require('mongoose');
var url = 'mongodb://localhost/myShoppingApp'
mongoose.connect(url);
const Transaction = require('../models/transaction')
const helper = require('../helpers/help');
// const Book = require('../models/book');

module.exports = {
  check:(req,res,next)=>{
    let counter = 0
    let booklist = req.body.booklist.split(',')
    let arr = []
    for (var i = 0; i < booklist.length; i++) {
      Book.findById(booklist[i],(err,result)=>{
        if(result.stock<0){
          return res.send(`stock kosong ${result.title}`)
        }
        counter++
        console.log(result.stock,counter);
        if(counter==booklist.length){
          next()
        }
      })
    }
  },
  findAll:(req,res)=>{
    Transaction.find()
    .populate('booklist')
    .exec((err,transactions)=>{
      res.send(transactions)
    })
  },
  create:(req,res)=>{
    let transaction = new Transaction({
      memberid:req.body.memberid,
      days:req.body.days,
      out_date:new Date(),//(req.body.out_date),
      due_date:helper.due_date(new Date(),req.body.days),
      // in_date:new Date(req.body.in_date),
      // fine:helper.fine(req.body.in_date,req.body.out_date,req.body.days),
      booklist:req.body.booklist.split(',')
    })
    transaction.save((err,transactionResult)=>{
      if(!err){
        res.send(transactionResult)
      } else {
        res.send(err)
      }
    })
  },
  update:(req,res)=>{
    Transaction.findById(req.params.id,(err,transaction)=>{
      transaction.in_date= new Date()
      transaction.fine=helper.fine(new Date(),transaction.out_date,transaction.days)
      transaction.save((err,updatedtransaction)=>{
        res.send(updatedtransaction)
      })
    })
  },
  delete:(req,res)=>{
    Transaction.deleteOne({_id:req.params.id},(err,result)=>{
      res.send(`Successfully deleted from collection ${result}`)
    })
  }
};