const express = require('express')
const ControllerImage = require('../controllers/imageController')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.get('/images', authentication, ControllerImage.getImagesByProdcutId)
router.get('/pub/images', ControllerImage.getImagesByProdcutId)

module.exports = router