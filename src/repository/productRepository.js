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
        try {
            return await Product.findByPk(id)
        } catch (error) {
            throw new Error(`Failed to retrieve product: ${error.message}`)
        }
    }

    async getOrderedByPrice() {
        try {
           
            return await Product.findAll({
                attributes: ['id', 'name', 'price', 'quantity_in_stock'],
                order: [['price', 'ASC']] 
            });
        } catch (error) {
            console.error(`Error in getOrderedByPrice: ${error.message}`)
            throw new Error(`Failed to retrieve products ordered by price: ${error.message}`)
        }
    }

    async  getByLowInStock() {
        try{
            return await Product.findAll({
                attributes: ['id', 'name', 'price', 'quantity_in_stock'],
                order: [['quantity_in_stock', 'ASC']],
                limit: 10
            }) 
        } catch (error){
                throw new Error(`Failed to retrieve products ordered by stock: ${error.message}`)
        }
    }


    async updateProduct(id, updatedProduct){
        try {
            const product = await Product.findByPk(id)
            if (!product) {
                return null
            }
          await product.update(updatedProduct)   
            return product
        } catch (error) {
            console.error(`Error updating product: ${error.message}`)
            throw error
        }
    }    
 }







module.exports = new ProductRepository()
