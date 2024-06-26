const prompt = require('prompt-sync')();

let aleatorio = Array();

for (let i = 0; i < 20; i++){
    aleatorio.push(Math.floor(Math.random() * 100));
}
console.log("Números gerados:");
console.log(aleatorio);
console.log("Ordem Crescente:");
console.log(aleatorio.sort());