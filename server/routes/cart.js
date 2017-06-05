const express = require('express');
const router = express.Router();
const carts = require('../controllers/cart');

router.get('/', carts.findAll);

router.get('/:id', carts.findOne);

router.post('/', carts.createData);

router.put('/:id', carts.updateById);

router.delete('/:id', carts.deleteById);

module.exports = router;
