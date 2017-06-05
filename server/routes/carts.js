var express = require('express')
var router = express.Router()
var cartController = require('../controllers/carts')

router.get('/',cartController.getAll)
router.post('/',cartController.insert)
router.get('/:id',cartController.getOne)
router.delete('/:id',cartController.delete)
router.put('/:id',cartController.update)
router.patch('/:id',cartController.additemlist)

module.exports = router
