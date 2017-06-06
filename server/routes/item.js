const express = require('express');
const router = express.Router();
const items = require('../controllers/item');

router.post('/', items.createData);

router.get('/', items.findAll);

router.get('/:id', items.findOne);

router.patch('/:id', items.updateById);

router.delete('/:id', items.deleteById);

router.post('/find', items.findByCategory);

module.exports = router;
