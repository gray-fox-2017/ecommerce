const express = require('express');
const router = express.Router()
const customersController = require('../controllers/customersController');

router.get('/',customersController.findAll)

router.post('/',customersController.create)

router.put('/:id',customersController.update)

router.delete('/:id',customersController.delete)

module.exports = router;