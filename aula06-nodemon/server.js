const express = require('express');
const app = express();

//         Criar    ler    atualizar   apagar
// CRUD -> CREATE,  READ,  UPDATE,     DELETE
//         POST     GET    PUT         DELETE

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
        Nome:<input type="text" name="name">
        <button>Enviar formulario</button>
        </form>`);
});

app.post('/', (req, res) => {
    res.send('recebi')
})

app.get('/contato', (req, res) => {
    res.send("Obrigado")
})

app.listen(3000, () => {
    console.log("Rodando na 3000")

});