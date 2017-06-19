const express = require('express');
const router = express.Router()
const transactionsController = require('../controllers/transactionsController');

router.get('/',transactionsController.findAll)

router.post('/',transactionsController.check,transactionsController.create)

router.put('/:id',transactionsController.update)

router.delete('/:id',transactionsController.delete)

module.exports = router;