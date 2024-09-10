const Product = require('../models/productModel')

class ProductRepository {

    async create(data) {
        try {
            return await Product.create(data)
        } catch (error) {
            throw new Error(`Failed to create product: ${error.message}`)
        }
    }

    async productExists(name) {
        try {
          const product = await Product.findOne({
            where: { name: name }
          })
          return !!product 
        } catch (error) {
          throw new Error(`Failed to check if product exists: ${error.message}`)
        }
      }
  
  
    async getAll() {
        try {
            return await Product.findAll({
              attributes: ['id', 'name', 'price', 'quantity_in_stock'] 
            })
          } catch (error) {
            throw new Error(`Failed to retrieve products: ${error.message}`)
          }
    }

    async getById(id) {
        return await Product.findByPk(id)
    }

    async update(id, data) {
        const product = await Product.findByPk(id)
        if (product) {
            return await product.update(data)
        }
     throw new Error('Product not found')
    }

    async delete(id) {
        const product = await Product.findByPk(id)
        if (product) {
        return await product.destroy()
        }
        throw new Error('Product not found')
    }
}

module.exports = new ProductRepository()
