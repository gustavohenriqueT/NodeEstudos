const escola = [
    {nome: 'Turma M1', alunos: [{nome: 'Gustavo', nota: 8.1}, {nome: 'Ana', nota: 9.3}]},
    {nome: 'Turma M2', alunos: [{nome: 'Rebeca', nota: 8.9}, {nome: 'Roberto', nota: 7.3}]},
    {nome: 'Turma M3', alunos: [{nome: 'Maria', nota: 9.2}, {nome: 'Pedro', nota: 9.8}]},
    {nome: 'Turma M4', alunos: [{nome: 'Ana', nota: 8.1}, {nome: 'Guilherme', nota: 8.9}]},
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas = escola.map(getNotasDaTurma)
console.log(notas)


Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

