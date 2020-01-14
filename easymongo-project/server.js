require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const easymongoRouter = require('./routes/easymongoRoute')
app.use('/easymongoRoute', easymongoRouter)

const BillRouteur = require('./routes/BillRouteur')
app.use('/billrouteur', BillRouteur)

const ClientRouteur = require('./routes/ClientRouteur')
app.use('/clientrouteur', ClientRouteur)

const ProductRouteur = require('./routes/ProductRouteur')
app.use('/productrouter', ProductRouteur)

app.listen(3000, () => console.log('server started'))
