var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

//Get all book
router.get('/',itemControllers.getAll)

//Add a book
router.post('/', itemControllers.addItem)

//Delete a book
router.delete('/:id',itemControllers.deleteItem)

//Update a book
router.patch('/:id', itemControllers.updateItem)

module.exports = router;
