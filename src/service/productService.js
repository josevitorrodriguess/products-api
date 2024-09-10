const productRepository = require('../repository/productRepository')

class ProductService {

    async createProduct(data) {
        try {
        
          const existingProduct = await productRepository.productExists(data.name)
          if (existingProduct) {
            throw new Error('A product with this name already exists')
          }
        
          
          return await productRepository.create(data)
        } catch (error) {
          throw new Error(`Failed to create product: ${error.message}`)
        }
      }
    

  async getAll() {
    try {
        return await productRepository.getAll()
      } catch (error) {
        throw new Error(`Failed to retrieve products: ${error.message}`)
      }
  }


  async getProductById(id) {
    return await productRepository.getById(id)
  }


  async updateProduct(id, data) {
    return await productRepository.update(id, data)
  }

  async deleteProduct(id) {
    return await productRepository.delete(id)
  }
}

module.exports = new ProductService()
