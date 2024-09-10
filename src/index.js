require('dotenv').config()
const express = require('express')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/shoppingcartRoutes')
const setup = require('./config')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/products', productRoutes)
app.use('/cart', cartRoutes)


setup()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
