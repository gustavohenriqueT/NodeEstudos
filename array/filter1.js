// Filtrar Array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2500 // se for false, ele nao entra no array, se for true ele entra no array
}))

const caro = produto => produto.preco >= 500 // funcao anonima
const fragil = produto => produto.fragil // funcao anonima

console.log(produtos.filter(caro).filter(fragil)) // array com os produtos caros e fràgeis