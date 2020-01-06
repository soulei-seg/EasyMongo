const mongoose = require('mongoose')
var Schema = mongoose.Schema

const clientSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  rowid: String,
  name: String,
  stock: Number,
  image: String,
  price: Number,
  bill: String
}, {collection: 'clients'})

module.exports = mongoose.model('Bill', clientSchema);