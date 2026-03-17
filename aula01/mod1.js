const nome ='Lucas';
const sobrenome ='Pastana';
const marca  = "Audi";
const gtr ='Suhr mateus T'

const Falanome=()=>{
    console.log(marca,gtr)
}
//2° alternativa para n aparecer undefined
const Falanome2=()=> nome+''+ sobrenome


//Objeto original 
module.exports.nome = nome;


exports.sobrenome = sobrenome;
exports.nome = nome;
exports.falanome2 = Falanome2;
exports.falanome = Falanome;
exports.marca = marca;
exports.gtr=gtr;

// A palavra this no node aponta para module.exports e exports

this.qualquercoisa = "o Que eu quero exportar"


// Com classe

class Things{
    constructor(nome2){
        this.nome2 = nome2
    }
}
exports.nome2='LUcas'
exports.Things= Things;