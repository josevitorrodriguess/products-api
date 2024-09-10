const { Sequelize } = require('sequelize')
require('dotenv').config()

const dsn = process.env.DB_CONNECTION


const sequelize = new Sequelize(dsn)

module.exports = sequelize
