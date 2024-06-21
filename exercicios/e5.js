const prompt = require('prompt-sync')();

console.log("Escolha sua jogada:\n\n0 - Pedra;\n1 - Papel;\n2 - Tesoura;\n")
let jogador = parseInt(prompt("Escolha: "));
let computador = Math.floor(Math.random() * 3);
let escolhas = ["Pedra", "Papel", "Tesoura"];
let resultado;

if (resultado){
    if(jogador == computador){
        resultado = "Empate";
    }else if(jogador == 0 && computador == 1){
        resultado = "Computador Venceu!"
    }else if(jogador == 0 && computador == 2){
        resultado = "Você Venceu!"
    } else if(jogador == 1 && computador == 0){
        resultado = "Você Venceu!"
    } else if(jogador == 1 && computador == 2){
        resultado = "Computador Venceu!"
    } else if(jogador == 2 && computador == 0){
        resultado = "Computador Venceu!"
    } else if(jogador == 2 && computador == 1){
        resultado = "Você Venceu!"
    }

    console.log(`Sua escolha: ${escolhas[jogador]}.`);
    console.log(`Computador : ${escolhas[computador]}.`);
    console.log(`Resultado  : ${resultado}!`)
}else {
    console.log("Escolha um valor válido!")
}
