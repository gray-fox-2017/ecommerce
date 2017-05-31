const Users = require('../Models/users.js')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const Storage = require('dom-storage')
const localStorage = new Storage('./db.json', {strict:false,ws:' '})
const Token = localStorage.getItem('myKey')
require('dotenv').config()

function UserList (req,res,next){
  Users.find({},function(err,result){
    res.send(result)
  })
}

function signup (req,res,next){
  let salt = bcrypt.genSaltSync(saltRounds)
  let hash = bcrypt.hashSync(req.body.password,salt)
  Users.create({
    username: req.body.username,
    password: hash,
    email: req.body.email
  },function(err,result){
    res.send('Sign Up Success!')
  })
}

function login (req,res,next){
  Users.findOne({
    username: req.body.username
  },function(err,result){
    if(result === null){
      res.send('Invalid Username!')
    }
    else{
      if(bcrypt.compare(req.body.password,result.password)){
        let token = jwt.sign({_id: result.id, username: result.username, email: result.email},process.env.SECRET)
        localStorage.setItem('myKey',token)
        res.send('login Success!')  
      }
      else{
        res.send('Invalid Password!')
      }
    }    
  })
}

function editUser (req,res,next){
  User.findOne({
    _id: req.params.id
  },function(err,result){
    User.updateOne({
      _id: req.params.id
    },{
      username: req.body.username || result.username,
      email: req.body.email || result.email
    },function(err,result){
      res.send('Update User Sucess!')
    })
  })
}

function deleteUser (req,res,next){
  User.remove({
    _id: req.params.id
  },function(err,result){
    res.send('Delete Success!')
  })
}

module.exports = {
  signup,login,editUser,deleteUser,UserList
}