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
}


module.exports = new ProductController()