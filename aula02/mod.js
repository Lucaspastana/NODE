module.exports = function(x,y){
    return x *y;
}
//essa função n foi feita para ser utilizada aqui mas se quiser é assim

console.log(module.exports(2,2))

module.exports = class cachorro{
    constructor(nome)
    {
        this.nome = nome;
    }
    latir(){
        console.log(`${this.nome} está latindo`)
    }
}