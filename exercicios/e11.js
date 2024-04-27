const prompt = require('prompt-sync')();

module.exports = function parImpar() {
    let numero;

    do {
        numero = parseInt(prompt('Digite um número inteiro: '));

        if (numero <= 0 || isNaN(numero)) {
            break;
        }
        
        if (numero % 2 == 0) {
            console.log('Número par')
        } else {
            console.log('Número ímpar')
        }

    }while(numero > 0);

}