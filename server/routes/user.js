const express = require('express')
const ControllerUser = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.post('/login', ControllerUser.postLogin)
router.post('/register', authentication, ControllerUser.postRegister)

module.exports = router