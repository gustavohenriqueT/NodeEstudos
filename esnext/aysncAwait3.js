const { reject } = require("lodash")

function gerarNumeros(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumeros(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw 'Erro!'
    }
}

gerarMegaSena(8).then(console.log).catch(console.log)