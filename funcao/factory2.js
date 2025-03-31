function criarProduto (nome, preco){
    return{
        nome: nome, 
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Desodorante', 7))
console.log(criarProduto('Desodorante1', 7))
console.log(criarProduto('Desodorante2', 7))