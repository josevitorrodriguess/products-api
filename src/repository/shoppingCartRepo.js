const ShoppingCart = require('../models/shoppingCartModel')

class ShoppingCartRepository {
    async addCart(data) {
        try {
            return await ShoppingCart.create(data)
        } catch (error) {
            throw new Error(`Error creating shopping cart: ${error.message}`)
        }
    }

    async deleteCart(id) {
        try {
            const cart = await ShoppingCart.findByPk(id)

            if (!cart) {
                throw new Error('Cart not found')
            }

            await ShoppingCart.destroy({
                where:{
                    id: id
                }
            })

            return cart
        } catch (error) {
            throw new Error(`Error deleting shopping cart: ${error.message}`)
        }
    }
}

module.exports = new ShoppingCartRepository()
