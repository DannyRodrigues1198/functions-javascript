const prompt = require ('prompt-sync')()

const calculo = require ('./funcao');

let peso = 0
let altura = 0

peso = Number (prompt ('Insira seu peso: '))

altura = Number (prompt ('Insira sua altura: '))

console.log(`o imc do participante é`,calculo (peso,altura))



