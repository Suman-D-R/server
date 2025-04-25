const express = require('express');
const routes = express.Router();
const productControllers = require('../controllers/product');

routes.get('/', productControllers.getProducts);
routes.get('/:name', productControllers.getProductsByName);
routes.post('/', productControllers.addProduct);

module.exports = routes;
