function Aula(nome, videoID){
    this.nome = nome 
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate logo', 456)
console.log(aula1, aula2)

// Simulando o new

function Novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = Novo(Aula, 'Bem vindo', 123)
const aula4 = Novo(Aula, 'Ate logo', 456)
console.log(aula3, aula4)