const { getOrderedByPrice } = require('../repository/productRepository')
const productService = require('../service/productService')


class ProductController {
    async createProduct(req,res) {
        const { name, description, price, quantity_in_stock, date_inclusion } = req.body

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required and must be a non-empty string' })
    }

    if (!description || typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ error: 'Description is required and must be a non-empty string' })
    }

    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Price must be a positive number' })
    }

    if (typeof quantity_in_stock !== 'number' || quantity_in_stock < 0) {
        return res.status(400).json({ error: 'Quantity in stock must be a non-negative number' })
    }

    try {
        const product = await productService.createProduct(req.body)
        res.status(201).json(product)
    }catch (error) {
        res.status(500).json({ error: error.message })
      }
    }


    async getAllProducts(req,res){
        try {
            const products = await productService.getAll()
            res.status(200).json(products)
          } catch (error) {
            res.status(500).json({ error: error.message })
          }  
        }
    
    async getProductById(req,res){
        const id = parseInt(req.params.id, 10)
        try {
            const product = await  productService.getProductById(id)
            res.status(200).json(product)
        } catch (error){
            res.status(404).json({"error": error.message})
        }
    }


    async  getOrderedByPrice(req, res) {
        try {

            const products = await productService.getOrderedByPrice()
            
            res.json(products)
        } catch (error) {
            console.error(`Error in getOrderedByPrice controller: ${error.message}`)
            res.status(500).json({ message: 'Failed to retrieve products ordered by price' })
        }
    }
}
    



module.exports = new ProductController()