const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function MeuMiddleware(req, res, next) {
//     req.session = { nome: "Lucas", sobrenome: "Pastana" };
//     console.log();
//     console.log("Passei middleware");
//     console.log();
//     next();
// }

function logtime(req,res,next){
    var p1 = Date.now();
    const today = new Date(p1);
    today.toDateString()
    console.log(today);
    next();
}



// route.get('/', MeuMiddleware, homeController.paginaInicial, function (req, res, next) {
//     console.log();
//     console.log("I'm still here")
//     console.log(`'ultimo middleware' ${req.session.nome}`);
// });,

route.get('/',logtime,homeController.paginaInicial);

route.post('/', homeController.trataPost);
module.exports = route;

//rotas para contato
route.get('/contato', contatoController.paginainicial)