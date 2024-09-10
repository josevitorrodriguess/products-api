const ShoppingCart = require('../models/shoppingCartModel')

class ShoppingCartRepository {
    async addCart(data) {
        try {
            return await ShoppingCart.create(data)
        } catch (error) {
            throw new Error(`Error creating shopping cart: ${error.message}`)
        }
    }
}

module.exports = new ShoppingCartRepository()
