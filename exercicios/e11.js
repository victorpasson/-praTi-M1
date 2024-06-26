const prompt = require('prompt-sync')();

let a1 = parseFloat(prompt("Digite o primeiro termo da PA: "));
let razao = parseFloat(prompt("Digite a razão da PA      : "));

let pa = [a1];

for (let i = 0; i < 9; i++){
    pa.push(pa[i] + razao)
}

console.log(pa);