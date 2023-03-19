const express = require('express')
const ControllerCategory = require('../controllers/categoryController')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.get('/categories', authentication, ControllerCategory.getCategories)
router.post('/categories', authentication, ControllerCategory.postCategories)
router.patch('/categories/:id', authentication, ControllerCategory.patchCategories)
router.delete('/categories/:id', authentication, ControllerCategory.deleteCategories)

module.exports = router