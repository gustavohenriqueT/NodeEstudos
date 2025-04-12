const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!(remove o ultimo elemento)
console.log(pilotos)

pilotos.push('Verstappen') // Verstappen entrou na equipe (Adiciona um elemento no final do array)
console.log(pilotos)

pilotos.shift() // Vettel saiu da equipe (remove o primeiro ele,mento do array)
console.log(pilotos)

pilotos.unshift('Hamilton') // Hamilton entrou na equipe (Adiciona um elemento no inicio do array)  
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar        
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover    
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array
console.log(algunsPilotos2)