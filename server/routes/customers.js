var express = require('express');
var router = express.Router();

var customerctrl = require('../controllers/customerctrl')

router.get('/', customerctrl.get)

router.post('/', customerctrl.create)

router.get('/:id', customerctrl.getOne)

router.put('/:id', customerctrl.update)

router.delete('/:id', customerctrl.remove)

module.exports = router;