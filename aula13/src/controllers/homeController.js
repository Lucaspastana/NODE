//exports.paginainicial = (req,res,next)=>{
// res.send(`<form action="/" method="POST">
//     Nome:<input type="text" name="qualquer">
//     <button>Enviar formulario</button>
//     </form>`);
//}
//const HomeModel =require('../models/HomeModel')


// HomeModel.create({
//     titulo:"Teste qualquer",
//     descricao:"teste"
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e))


exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Luiz', logado: true };
    res.render('index');
    return;
}



exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}