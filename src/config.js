const sequelize = require('./database/db')
const Product = require('./models/productModel')

async function setup() {
  try {
    await sequelize.sync({ alter: true })
  } catch (error) {
    console.error('Error synchronizing database:', error)
    throw error
  }
}

module.exports = setup
