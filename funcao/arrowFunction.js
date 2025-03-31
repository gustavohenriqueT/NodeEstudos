let dobro = function (a) {
    return 2 * a 
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implcitio
console.log(dobro(Math.PI))

let ola = function(){
    return 'OLÁ'
}

ola = () => {
    return 'OLÁ'
}

ola = () => 'OLÁ' // return implcitio
console.log(ola())