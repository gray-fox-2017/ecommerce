const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items_controller');

router.get('/', itemsController.getAll);
router.get('/:id', itemsController.getSingle);
router.post('/', itemsController.createItem);
router.delete('/:id', itemsController.deleteItem);
router.put('/:id', itemsController.updateItem);

module.exports = router;
