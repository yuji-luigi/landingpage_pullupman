const express = require('express')
const path = require('path')
const app = express()
const routes = require('./api/routes/index.js')
require('dotenv').config()




app.use(express.static(path.join(__dirname, 'public')))

const PROD = 'production'
const DEV = 'development'

console.log(__dirname)

const NODE_ENV = process.env.NODE_ENV

// app.use('/', routes)



const PORT = NODE_ENV === PROD ? process.env.PORT_PRODUCTION : process.env.PORT || 4444
app.listen(PORT, () => console.log(`server is runnning http://localhost:${PORT}`))