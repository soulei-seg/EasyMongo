const mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  rowid: String,
  pseudo:   String,
  firstname: String,
  lastname: String,
  email: String,
  password: String
}, {collection: 'Example'})

var user = mongoose.model('user', userSchema)

var mongo = mongoose.connect('mongodb://localhost:3005/Example', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

  get: async(userId) => {
    var result = user.findOne({"rowid": 0})
    return await result;
  },


  getAll: async() => {
    return result = user.find({})
  }

}
