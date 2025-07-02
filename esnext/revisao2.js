// Arrow Function
const soma = (a, b) => a + b // caso coloque um corpo na função, precisa-se obrigatoriamente do return
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // em caso de arrow funcion, this sempre apontara para este objeto/ em caso de função tradicional ele aponta para global, 
const lexico2 = lexico1.bind({}) // mesmo forçando um bind, não funciona
lexico1()
lexico2()

// parametro default
function log(texto = 'Node') { // caso não passe nenhum parametro para ele, ele assume o valor padrao
    console.log(texto)
}

log(undefined) // valor padrao
log() //valor padrao
log(null) // neste caso ele não retorna nada pois ele assume que eu quero nada de retorno
log("Diferente") // neste caso é diferente pois como passei um parametro para ele, ele assume o valor do parametro

// operador rest e spread
function total(...numeros) { // agrupa um conjunto
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
