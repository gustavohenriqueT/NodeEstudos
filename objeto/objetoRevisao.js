// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira' 
produto['marca do produto'] = 'Generica'
produto.preco =  200

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)