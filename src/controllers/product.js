const productServices = require('../services/product');

module.exports.getProducts= async (req, res) => {
  const data = await productServices.getProducts(req.query);
  res.send({
    data: data,
  });
};

module.exports.getProductsByName= async (req, res) => {
  // console.log(req.query)
  const data = await productServices.getProductsByName(req.params.name);
  res.send({
    data: data,
  });
};

module.exports.addProduct = (req, res) => {
  // console.log(req.body);
  const data = productServices.addProduct(req.body);
  res.status(201).send({
    message: 'added successfuly',
    data:data
  });
};
