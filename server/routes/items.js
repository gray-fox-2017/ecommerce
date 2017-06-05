var express = require('express')
var router = express.Router()
var itemsController = require('../controllers/items')

router.get('/',itemsController.getAll)
router.post('/',itemsController.insert)
router.get('/:id',itemsController.getOne)
router.delete('/:id',itemsController.delete)
router.patch('/:id',itemsController.update)

module.exports = router
