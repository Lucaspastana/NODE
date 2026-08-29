require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dns = require('dns')

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
]) // isso preciso ser antes da conexão com o banco
mongoose.connect(process.env.connectionstring);


const HomeControl = new mongoose.Schema({
    titule: {type: String, required:true},
    descricao: String
})


const HomeModel = mongoose.model('Home', HomeControl)

HomeModel.create({
    titule:"algo qualquer",
    descricao: "Olá mundo"
})
.then(dados => console.log(dados))
.catch(e => console.log(e))