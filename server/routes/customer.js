const express = require('express');
const router = express.Router();
const customers = require('../controllers/customer')

router.get('/', customers.findAll);

router.get('/:id', customers.findOne);

router.post('/', customers.createData);

router.patch('/:id', customers.updateById);

router.delete('/:id', customers.deleteById);

module.exports = router
