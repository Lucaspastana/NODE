const express = require('express');
const app = express();
const routes = require('./routes.js')
const path = require('path')
//         Criar    ler    atualizar   apagar
// CRUD -> CREATE,  READ,  UPDATE,     DELETE
//         POST     GET    PUT         DELETE


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine','ejs');

app.use(routes);


app.listen(3000, () => {
    console.log("Rodando na 3000")

});


// req.query: When data is sent through a URL, like http://localhost:3000/search?name=John&age=45, 
// we can retrieve that data in our Node.js/Express code like this:

// router.get('/search', function(req, res, next) {
// var name = req.query.name;
// console.log(`Name: ${name}`)
// var age = req.query.age;
// console.log(`Age: ${age}`)
// res.send('Request has been parsed, see console');



// req.params: If data is sent directly in the URL without keys, like http://localhost:3000/search/John/45, 
// we can get it like this:

// router.get('/search/:name/:age', function(req, res, next) {
// var name = req.params.name;
// console.log(`Name: ${name}`)
// var age = req.params.age;
// console.log(`Age: ${age}`)
// res.send('Request has been parsed, see console');
// });