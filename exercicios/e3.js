const prompt = require('prompt-sync')();

let distancia = parseInt(prompt("Distância que deseja percorrer (em KM): "))

let passagem;
if (distancia <= 200) {
   passagem = 0.5 * distancia
}else {
    passagem = 0.45 * distancia
}

console.log(`Valor da Passagem: R$ ${passagem}`)