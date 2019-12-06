const mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  rowid: Number,
  pseudo:   String,
  firstname: String,
  lastname: String,
  email: String,
  password: String
}, {collection: 'example'})

var user = mongoose.model('user', userSchema)

var mongo = mongoose.connect('mongodb://localhost:27017/example', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

  get: async(userId) => {
    console.log("userId: "+userId)
    var result = user.findOne({"rowid": userId})
    console.log(result)
    return await result;
  },


  getAll: async() => {
    return result = user.find({})
  }

}
