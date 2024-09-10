const ShoppingCartService = require('../service/shoppingCartService')

class ShoppingCartController {
    async createShoppingCart(req, res) {
        try {
            const cartData = req.body
            console.log('Received cartData:', cartData)

            if (typeof cartData !== 'object' || !cartData.product_id || typeof cartData.quantity !== 'number') {
                throw new Error('Invalid request body. Data should include product_id and quantity.')
            }

            const cart = await ShoppingCartService.createCart(cartData)
            res.status(201).json(cart)
        } catch (error) {
            console.error('Error creating shopping cart:', error)
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = new ShoppingCartController()
