const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Digite a quantidade de cigarro fumados por dia: "));

let anos = parseInt(prompt("Digite por quantos anos você já fumou: "));

let dias_perdidos = (10 * quantidade * 365 * anos) / (60 * 24);

console.log(`Você já perdeu ${Math.floor(dias_perdidos)} dias de vida! Pare de Fumar!`);