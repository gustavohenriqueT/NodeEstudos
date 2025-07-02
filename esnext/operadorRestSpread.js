// rest (juntar)/ spread (esapalhar)

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // espalhando todos os atributos de funcionario
console.log(clone)
console.log(funcionario)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] // espalhando dentro do array todos os elementos de outro array
console.log(grupoFinal)
console.log(grupoA)