const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');
route.get('/', homeController.paginainicial);
route.post('/', homeController.trataPost);
module.exports = route;

//rotas para contato
route.get('/contato',contatoController.paginainicial)