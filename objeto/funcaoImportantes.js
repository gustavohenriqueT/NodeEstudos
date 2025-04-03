const pessoa = {
    nome: 'Rebeca',
    idade: 20,
    peso: 65
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true, 
    writable: false, 
    value: '01/01/2025'
})

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing (ECMAScript 2015)

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const objt = Object.assign(dest, o1, o2)

Object.freeze(objt)
objt.c = 1234
console.log(objt)