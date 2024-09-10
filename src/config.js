const sequelize = require('./database/db')
const Product = require('./models/productModel')
const  ShoppingCart = require('./models/shoppingCartModel')

async function setup() {
  try {
    await sequelize.sync({ alter: true })
  } catch (error) {
    console.error('Error synchronizing database:', error)
    throw error
  }
}

module.exports = setup
