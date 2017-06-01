var express = require('express');
var router = express.Router();

var transactionctrl = require('../controllers/transactionctrl')
var bookctrl = require('../controllers/bookctrl')
var auth = require('../controllers/auth');


router.get('/', transactionctrl.get)

router.post('/', transactionctrl.create)

router.post('/checkout', auth.checkout, bookctrl.purchased, transactionctrl.create)

router.post('/populated', auth.allCustomer, transactionctrl.getPopulated)

router.get('/:id', transactionctrl.getOne)

router.put('/:id', transactionctrl.update)

router.delete('/:id', transactionctrl.remove)

module.exports = router;