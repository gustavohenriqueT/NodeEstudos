// let e const

{
    var a = 1 // não possui escopo de bloco (posso acessar de fora do bloco)
    let b = 2 // possui escopo de bloco (não posso acessar de fora do bloco)

    // Exemplo funcional -- let
    console.log(b)
}

// Exemplo não funcional de let 
// console.log(b)

//Exemplo funcional de var
console.log(a)

// Template String (implementação com backtick para interpolação de variável)
const produto = 'Ipad'
console.log(`${produto} é caro`) // posso quebrar por ser backtick mas String com aspas não posso

// Destructuring
const [l, e, ...tras] = "Cod3r" // operador rest (letra c para l/letra o para e/tras para completar)
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // com espaço para selecionar exatamente os elementos que eu quero
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 20 } // desestruturação de um objeto
console.log(i, nome)