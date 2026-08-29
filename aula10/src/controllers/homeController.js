exports.paginainicial = (req,res)=>{
    // res.send(`<form action="/" method="POST">
    //     Nome:<input type="text" name="qualquer">
    //     <button>Enviar formulario</button>
    //     </form>`);
}
exports.paginainicial = (req,res)=>{
    res.send('index');
}



exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}