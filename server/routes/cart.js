var express = require('express');
var router = express.Router();
const cartControllers = require('../controllers/cartControllers');

//Get all transaction
router.get('/',cartControllers.getAll)

//Add a transaction
router.post('/',cartControllers.createCart)

//Delete a transaction
router.delete('/:id',cartControllers.deleteCart)

//Edit a transaction
router.patch('/:id', cartControllers.updateCart)

module.exports = router;
