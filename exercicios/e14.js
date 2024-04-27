const prompt = require('prompt-sync')();

module.exports = function media() {

    let soma = 0;
    let i = 0;

    let numero = parseFloat(prompt('Digite um número: '));

    while (numero != 0){
        i++;
        soma += numero;
        numero = parseFloat(prompt('Digite um número: '));
    }

    console.log(`Média: ${soma / i}`);
}