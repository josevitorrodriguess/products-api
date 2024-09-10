const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.post('/', productController.createProduct)
router.get('/findAll', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.get('/', productController.getOrderedByPrice)

module.exports = router