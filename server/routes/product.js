const express = require('express')
const router = express.Router()
const ContorllerProduct = require('../controllers/productController')
const authentication = require('../middlewares/authentication')

router.get('/products', authentication, ContorllerProduct.getProducts)
router.post('/products', authentication, ContorllerProduct.postProducts)
router.patch('/products/:id', authentication, ContorllerProduct.patchProduct)
router.delete('/products/:id', authentication, ContorllerProduct.deleteProducts)
router.get('/products/:slug', authentication, ContorllerProduct.getProductBySlug)

module.exports = router