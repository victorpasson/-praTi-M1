const prompt = require('prompt-sync')();

const horasAtividade = parseInt(prompt("Digite quantas horas de atividade você fez no mês: "));

let pontos;
if (horasAtividade <= 10) {
    pontos = 2 * horasAtividade;
} else if (horasAtividade <= 20) {
    pontos = 5 * horasAtividade;
} else {
    pontos = 10 * horasAtividade;
}

let dinheiro = 0.05 * pontos;

console.log("\nTotal de Pontos: " + pontos);
console.log("Você Ganhou : R$"+ dinheiro);