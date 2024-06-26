const prompt = require('prompt-sync')();

let nome = Array();
let idade = Array();
let pessoas = 0;

while(pessoas < 9){
    nome[prompt((pessoas + 1) + " - Digite o nome da pessoa " + (pessoas + 1) + ": ")] = parseInt(prompt((pessoas + 1) + " - Digite a idade da pessoa " + (pessoas + 1) + ": "));
    pessoas += 1;

}

console.log("------------- Menores de Idade -------------");
for (let key in nome){
    if(nome[key] < 18){
        console.log(`${key}: ${nome[key]}`);
    }
}