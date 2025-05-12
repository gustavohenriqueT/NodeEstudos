console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports)
console.log(this === exports)

function LogThis(){
    console.log("Dentro da Função...")
    console.log(this===exports) // Dentro de uma função, This não aponta para Exports
    console.log(this===module.exports) // Dentro de uma função, This não aponta para module.exports
    console.log(this===global) // Dentro de uma função, This aponta para Global

    this.perigo = '...' // Desta forma, colocamos "perigo" dentro do escopo global
}

LogThis()