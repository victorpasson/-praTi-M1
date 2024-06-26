const prompt = require('prompt-sync')();

let numeros = Array();

for (let i = 0; i < 10; i++){
    numeros.push(parseInt(prompt("Digite o número "+ (i+1) + ": ")));
}

console.log("------------- Números Par ------------- ")
numeros.forEach((valor, index) => {
    if(valor % 2 == 0) {
        console.log(`Número: ${valor} - Index: ${index}`)
    }});