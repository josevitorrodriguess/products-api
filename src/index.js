require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT


console.log(PORT)

app.listen(PORT,()=> console.log(`app running on ${PORT}`))