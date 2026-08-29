exports.paginainicial = (req,res)=>{
    res.send(`<form action="/" method="POST">
        Nome:<input type="text" name="qualquer">
        <button>Enviar formulario</button>
        </form>`);
}