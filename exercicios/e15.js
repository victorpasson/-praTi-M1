const prompt = require('prompt-sync')();

module.exports = function mediaPonderada(){
    let soma = 0;
    let i = 0;
    let pesoTotal = 0

    let numero = parseFloat(prompt('Digite um número: '));
    let peso = parseFloat(prompt('Digite o peso: '));

    while (numero != 0){
        i++;
        soma += (numero * peso);
        pesoTotal += peso;
        numero = parseFloat(prompt('Digite um número: '));

        if (numero != 0){
            peso = parseFloat(prompt('Digite o peso: '));
        }
    }

    console.log(`Média ponderada: ${soma / pesoTotal}`);
}