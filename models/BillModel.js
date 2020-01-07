const mongoose = require('mongoose')
var Schema = mongoose.Schema

const billSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  rowid: String,
  client:   String,
  create_date: Date,
  status: Boolean,
  payment_date: Date,
  price: Number,
  products: Array
}, {collection: 'bills'})

var bill = mongoose.model('bill', billSchema);

var mongo = mongoose.connect('mongodb://localhost:27017/PrimaryDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

  get: async(billId) => {
    var result = bill.findOne({"rowid": billId})
    return await result;
  },


  getAll: async() => {
    var result = bill.find({})
    return await result;
  },

  insert: async(params) =>{
    var newid = require('uuid').v4()
    console.log(params)
    var newBill = new bill({
      _id: new mongoose.Types.ObjectId(),
      rowid: newid,
      client: params.client,
      create_date: params.create_date,
      status: params.status,
      payment_date: params.payment_date,
      price: params.price,
      products: params.products
    });

    newBill.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  },

  update: async(billId, params) => {
    const upBill = await bill.findOne({rowid: billId});
    upBill.client = params.pseudo;
    upBill.create_date = params.create_date;
    upBill.status = params.status;
    upBill.payment_date = params.payment_date;
    upBill.price = params.price;
    upBill.products = params.products;
    await upUser.save();
  },
  
  remove: async(billId) => {
    console.log(billId)
    await user.deleteOne({rowid: billId});
  }

}