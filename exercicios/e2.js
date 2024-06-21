const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt("Digite a velocidade do carro: "));

if (velocidade > 80){
    let multa = (velocidade - 80) * 5
    console.log(`Você foi mutado! Valor da Multa: R$ ${multa}`);
} else {
    console.log("Você está dentro da velocidade permitida!")
}