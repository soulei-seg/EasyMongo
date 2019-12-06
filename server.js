require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes/base_route')

app.listen(3000, () => console.log('App started'))
app.use('/', router)