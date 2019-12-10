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
  },

  insert: async(params) =>{
    var newid = require('uuid').v4()
    console.log(params)
    var newUser = new user({
      _id: new mongoose.Types.ObjectId(),
      rowid: newid,
      pseudo: params.pseudo,
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email,
      password: params.password
    });
    newUser.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  },

  update: async(userId, params) => {
    const upUser = await user.findOne({rowid: userId});
    upUser.pseudo = params.pseudo;
    upUser.firstname = params.firstname;
    upUser.lastname = params.lastname;
    upUser.email = params.email;
    if(!params.password == ""){
      upUser.password = params.password;
    }
    await upUser.save();
  },
  
  remove: async(userId) => {
    console.log(userId)
    await user.deleteOne({rowid: userId});
  }

}
