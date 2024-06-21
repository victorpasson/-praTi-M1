const prompt = require('prompt-sync')();

let computador = Math.floor((Math.random() * 5) + 1);

let jogador = parseInt(prompt("Escolha um número entre 1 e 5: "));

if (computador == jogador){
    console.log("Parabéns! Você acertou!")
} else {
    console.log(`Você errou.. o número sorteado foi ${computador}. Tente novamente.`)
}