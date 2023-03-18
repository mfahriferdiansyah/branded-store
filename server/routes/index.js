const express = require('express')
const router = express.Router()
const category = require('./category')
const product = require('./product')
const image = require('./image')
const user = require('./user')

router.use(category)
router.use(product)
router.use(image)
router.use(user)

module.exports = router