//exports.paginainicial = (req,res,next)=>{
    // res.send(`<form action="/" method="POST">
    //     Nome:<input type="text" name="qualquer">
    //     <button>Enviar formulario</button>
    //     </form>`);
//}
const HomeModel =require('../models/HomeModel')


HomeModel.create({
    titulo:"Teste qualquer",
    descricao:"teste"
})
.then(dados => console.log(dados))
.catch(e => console.log(e))


exports.paginaInicial = (req,res,next)=>{
    console.log("Respondendo o cliente")
    res.send('index');
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
}



exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}