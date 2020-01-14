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
      mail: params.mail,
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
    const upClient = await client.findOne({rowid: clientId});
    upClient.firstname = params.firstname;
    upClient.lastname = params.lastname;
    upClient.mail = params.mail;
    upClient.create_date = params.create_date;
    await upClient.save();
  },
  
  remove: async(clientId) => {
    await user.deleteOne({rowid: clientId});
  }

}