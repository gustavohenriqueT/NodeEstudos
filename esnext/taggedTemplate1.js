// tagged template (processar o template string dentro de uma funcção)
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gustavo'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`) // gera 2 arrays, valores é oq foi interpolado e o restante é o que não foi.