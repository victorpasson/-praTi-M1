const prompt = require('prompt-sync')();

let segmento1 = parseInt(prompt("Digite o valor do segmento 1: "));
let segmento2 = parseInt(prompt("Digite o valor do segmento 2: "));
let segmento3 = parseInt(prompt("Digite o valor do segmento 3: "));

if ((segmento1 < segmento2 + segmento3) && (segmento2 < segmento1 + segmento3) && (segmento3 < segmento1 + segmento2)){
    console.log("É possível formar um triângulo com esses segmentos!")
}else {
    console.log("Não é possível formar um segmento com esses segmentos!")
}