// não aceita repetição/ não é indexada
const times = new Set()
times.add('Corinthians')
times.add('São Paulo').add('Santos').add('Flamengo')
times.add('Vasco')
times.add('Corinthians')

console.log(times)
console.log(times.size)
console.log(times.has('Corinthians'))
console.log(times.has('Corinthians'))
times.delete('São Paulo')
console.log(times.has('São Paulo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)