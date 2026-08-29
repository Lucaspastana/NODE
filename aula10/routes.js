const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
route.get('/', homeController.paginainicial);
route.post('/', homeController.trataPost);
module.exports = route;

//rotas para contato
route.get('/contato',contatoController.paginainicial)