const prompt = require('prompt-sync')();

let nomes = Array();

for(let i = 0; i < 7; i++){
    nomes.unshift(prompt("Digite o nome " + (i + 1) + " : "));
}

console.log(nomes);