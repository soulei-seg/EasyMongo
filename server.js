require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/base_route')

console.log("Trying connection on "+process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.listen(3000, () => console.log('server started'))
app.use('/', router)