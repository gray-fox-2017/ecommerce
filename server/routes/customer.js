var express = require('express');
var router = express.Router();
var customerControllers = require('../controllers/customerControllers')

//Get all customer
router.get('/', customerControllers.getAll)

//Add a customer
router.post('/',customerControllers.createCustomer)

//Delete a customer
router.delete('/:id',customerControllers.deleteCustomer)

//Update a customer
router.patch('/:id', customerControllers.updateCustomer)

module.exports = router;
