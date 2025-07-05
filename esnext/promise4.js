const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.9).then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        e => console.log(`Erro esp: ${e}`)) // Erros epecificos caem aqui, por ter um tratamento anterior ao catch, caso não tenha, ele cai no tratamento geral
    .catch(e => console.log(`Erro geral: ${e}`)) // Erros não tratados anteriormente caem aqui