var express = require('express');
var router = express.Router();
const ItemsController = require('../Controllers/items-controller.js')
const UsersController = require('../Controllers/users-controller.js')

router.get('/', UsersController.UserList)
router.post('/signup', UsersController.signup)
router.post('/login', UsersController.login)
router.put('/editUser/:id', UsersController.editUser)
router.delete('/deleteUser/:id', UsersController.deleteUser)

router.get('/items', ItemsController.list)
router.get('/search/:category', ItemsController.searchCategory)
router.get('/getItem/:id', ItemsController.getItem)
router.post('/createItem', ItemsController.createItem)
router.post('/editItem/:id', ItemsController.editItem)
router.delete('/deleteItem/:id', ItemsController.deleteItem)


module.exports = router;

// module.exports = {
//   list,searchCategory,deleteItem,editItem
// }
// 
// module.exports = {
//   signup,login,editUser,deleteUser,UserList
// }