console.log(__dirname)
console.log(__filename)

const path = require('path');

console.log(path.resolve(__dirname, '..')) // aqui ele pegou o caminho aonde eu estava e voltou uma pasta anterior
console.log(path.resolve(__dirname, '..','aula01')) // aqui ele voltou uma e entrou na pasta da aula 01 