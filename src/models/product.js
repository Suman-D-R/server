const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  unit:{
    type: String,
    required: true,
    enum:['kg','gm','pcs']
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
