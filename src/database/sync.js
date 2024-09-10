const sequelize = require('./db')
const Product = require('./product')

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true })
    console.log('Database synchronized!')
  } catch (error) {
    console.error('Error synchronizing database:', error)
  }
}



module.exports = syncDatabase

