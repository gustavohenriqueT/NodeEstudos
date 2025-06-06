const alunos = [
    {nome:'Joao', notas:7.9},
    {nome:'Maria', notas:9.2}
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].notas
}

console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.notas
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

//select codigo, nome, email from clientes where ativo = 1