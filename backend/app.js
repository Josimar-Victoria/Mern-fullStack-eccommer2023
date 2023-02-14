const express = require('express')
const app = express()
const ErrorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

// Route imports
const product = require('./routes/ProductRoute')
const user = require('./routes/UserRoute')
const order = require('./routes/OrderRoute')

// Route Products
app.use('/api/v1', product)

// Route Users
app.use('/api/v1', user)

// Route Users
app.use('/api/v1', order)

// it's for errorHandeling
app.use(ErrorHandler)

module.exports = app
