function compras(trabalho1, trabalho2){

    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!( trabalho ^ trabalho) // bitwise xor
    const comprarTv35 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv35, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))