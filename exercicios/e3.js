const prompt = require('prompt-sync')();

module.exports = function () {
    let numero1 = parseInt(prompt('Digite o primeiro número: '));
    let numero2 = parseInt(prompt('Digite o segundo número: '));
    let numero3 = parseInt(prompt('Digite o terceiro número: '));

    let numero4 = numero1 + numero2 + numero3;

    let operacao1 = numero1 + 25;
    let operacao2 = numero2 * 20;
    let operacao3 = numero3 * 0.12;

    console.log(`Operação 1: ${operacao1}`);
    console.log(`Operação 2: ${operacao2}`);
    console.log(`Operação 3: ${operacao3}`);
    console.log(`Número 4: ${numero4}`);
}

