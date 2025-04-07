const objt = {a:1, b: 2, c:3, soma(){return a + b +c }}

console.log(JSON.stringify(objt)) //transformar o objeto em JSON
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //transformar JSON em objeto