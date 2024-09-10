const ProductRepository = require('../repository/productRepository')
const ShoppingCartRepository = require('../repository/shoppingCartRepo')

class ShoppingCartService {
    async createCart(cartData) {
        try {
            if (typeof cartData !== 'object' || !cartData.product_id || typeof cartData.quantity !== 'number') {
                throw new Error('Invalid request body. Data should include product_id and quantity.')
            }

            await ProductRepository.updateStock(cartData.product_id, cartData.quantity)

            const cart = await ShoppingCartRepository.addCart(cartData)

            return cart;
        } catch (error) {
            throw new Error(`Error creating shopping cart: ${error.message}`)
        }
    }

    async deleteCart(id) {
        try {
            // Fetch the cart to get the product_id and quantity
            const cart = await ShoppingCartRepository.deleteCart(id)

            if (cart) {
                // Restore the stock of the product
                await ProductRepository.restoreStock(cart.product_id, cart.quantity)
            }
        } catch (error) {
            throw new Error(`Error deleting shopping cart: ${error.message}`)
        }
    }
}

module.exports = new ShoppingCartService()
