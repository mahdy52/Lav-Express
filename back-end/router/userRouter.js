const express = require ('express')
const router = express.Router()
const User = require ('../controller/userController')

router.get('/get',User.getUser)
router.post('/post',User.addUser)
router.delete('/:id/delete',User.deleteUser)
router.put('/:id/update',User.updateUser)


module.exports = router