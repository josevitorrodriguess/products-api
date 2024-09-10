const { Sequelize } = require('sequelize')
require('dotenv').config()

const dsn = process.env.DB_CONNECTION

console.log(dsn)

const sequelize = new Sequelize(dsn)

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()


module.exports = sequelize
