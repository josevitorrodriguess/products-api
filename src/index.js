require('dotenv').config()
const express = require('express')
const setup = require('./config')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

console.log('PORT:', PORT)

setup()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
