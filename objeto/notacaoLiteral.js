const a = 1 
const b = 2
const c =3 

const objt1 = {a: a, b: b,c: c} // forma antiga 
const objt2 = {a, b, c} // forma nova
console.log(objt1, objt2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const objt3 = {} //forma antiga 
objt3[nomeAttr] = valorAttr
console.log(objt3)

const objt4 = {[nomeAttr]: valorAttr} //forma nova
console.log(objt4)

const objt5 = {
    funcao1: function(){ //forma antiga
        
    },

    funcao2(){ //forma nova

    }
}

console.log(objt5)