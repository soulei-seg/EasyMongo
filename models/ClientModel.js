const mongoose = require('mongoose')
var Schema = mongoose.Schema

const clientSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  rowid: String,
  firstname: String,
  lastname: String,
  mail: String,
  create_date: Date
}, {collection: 'clients'})

var client = mongoose.model('client', clientSchema);

var mongo = mongoose.connect('mongodb://localhost:27017/PrimaryDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

  get: async(clientId) => {
    var result = client.findOne({"rowid": clientId})
    return await result;
  },


  getAll: async() => {
    return result = client.find({})
  },

  insert: async(params) =>{
    var newid = require('uuid').v4()
    console.log(params)
    var newclient = new client({
      _id: new mongoose.Types.ObjectId(),
      rowid: newid,
      firstname: params.firstname,
      lastname: params.lastname,
      email: params.email,
      create_date: params.create_date
    });
    newclient.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  },

  update: async(clientId, params) => {
    const upClient = await client.findOne({rowid: userId});
    upClient.firstname = params.firstname;
    upClient.lastname = params.lastname;
    upClient.email = params.email;
    upClient.create_date = params.create_date;
    if(!params.password == ""){
      upClient.password = params.password;
    }
    await upClient.save();
  },
  
  remove: async(userId) => {
    console.log(userId)
    await user.deleteOne({rowid: userId});
  }

}