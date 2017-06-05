var express = require('express')
var router = express.Router()
var customerController = require('../controllers/customers')

router.post('/signin',customerController.signin)
router.post('/signup',customerController.signup)

router.get('/',customerController.getAll)
router.post('/',customerController.insert)
router.get('/:id',customerController.getOne)
router.delete('/:id',customerController.delete)
router.patch('/:id',customerController.update)

module.exports = router
