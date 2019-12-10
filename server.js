require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes/base_route')

var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('App started'))
app.use('/', router)