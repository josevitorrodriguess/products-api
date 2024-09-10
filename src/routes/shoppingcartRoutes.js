const express = require('express')
const router = express.Router()
const shoppingCartController = require('../controller/shoppingCartController')


router.post('/', shoppingCartController.createShoppingCart)

module.exports = router
