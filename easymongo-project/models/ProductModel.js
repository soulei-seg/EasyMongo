const mongoose = require('mongoose')
var Schema = mongoose.Schema

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  rowid: String,
  name: String,
  stock: Number,
  image: String,
  price: Number,
  bill: String
}, {collection: 'products'})

var product = mongoose.model('product', productSchema);

var mongo = mongoose.connect('mongodb://localhost:27017/PrimaryDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {

  get: async(productId) => {
    var result = product.findOne({"rowid": productId})
    return await result;
  },


  getAll: async() => {
    return result = product.find({})
  },

  insert: async(params) =>{
    var newid = require('uuid').v4()
    console.log(params)
    var newproduct = new product({
      _id: new mongoose.Types.ObjectId(),
      rowid: newid,
      name: params.name,
      stock: params.stock,
      image: params.image,
      price: params.price,
      bill: params.bill
    });
    newproduct.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  },

  update: async(productId, params) => {
    const upProduct = await product.findOne({rowid: productId});
    upProduct.name = params.name;
    upProduct.stock = params.stock;
    upProduct.image = params.image;
    upProduct.price = params.price;
    upProduct.bill = params.bill;
    await upProduct.save();
  },
  
  remove: async(productId) => {
    console.log(productId)
    await product.deleteOne({rowid: productId});
  }

}