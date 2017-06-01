const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/carts_controller');

router.get('/', cartsController.getAll);
router.get('/:id', cartsController.getSingle);
router.post('/', cartsController.createTrans);
router.delete('/:id', cartsController.deleteTrans);
router.put('/:id', cartsController.updateTrans);

module.exports = router;
