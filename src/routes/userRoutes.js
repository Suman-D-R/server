const express = require('express');
const routes = express.Router();
const userController = require('../controllers/user')
const auth = require('../middleware/auth')

routes.post('/',userController.registerUser)

routes.delete('/',auth,userController.deleteUser)

module.exports = routes;
