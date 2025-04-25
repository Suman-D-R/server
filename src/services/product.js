const Product = require('../models/product');

module.exports.getProducts = async (query) => {
 try{
  const Name = query?.name;
  const data = Name ? await Product.findOne({name:Name}) :  Product.find()
  return data
 }catch(error){
  return {
    message: 'somthing went wrong'
  }
 }
};

module.exports.getProductsByName = async (name) => {
  try{
   const data = await Product.findOne({name:name});
   return data
  }catch(error){
   return {
     message: 'somthing went wrong'
   }
  }
 };

module.exports.addProduct = async (data) => {
  try {
    const res = await Product.create(data);
    return res;
  } catch (error) {
    return error;
  }
};
