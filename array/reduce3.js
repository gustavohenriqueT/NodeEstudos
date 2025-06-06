// Com callback e valor incial
Array.prototype.reduce2 = function(callback, valorInicial){
    let indiceInical = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInical; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5]
console.log(nums.reduce2(soma, 21))

