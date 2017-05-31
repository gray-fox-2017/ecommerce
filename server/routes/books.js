var express = require('express');
var router = express.Router();

var bookctrl = require('../controllers/bookctrl')

router.get('/', bookctrl.get)

router.post('/', bookctrl.create)

router.get('/:id', bookctrl.getOne)

router.put('/:id', bookctrl.update)

router.delete('/:id', bookctrl.remove)

module.exports = router;