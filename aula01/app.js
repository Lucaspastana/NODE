//PARA IMPORTAR USAMOS Require

const mod1 = require('./mod1')
const falanome = mod1.falanome2;


//Posso executar a função que estou importando do outro arquivo.

console.log(mod1.falanome());

console.log(falanome2());

//Outro jeito de importar 

const {nome, sobrenome, falanome2, gtr, marca} = require('./mod1');

console.log(marca,gtr);