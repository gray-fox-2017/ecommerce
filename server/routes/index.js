var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.send('Please use Postman to use this package and refer to /books or /customers or /transactions')
})

module.exports = router;
