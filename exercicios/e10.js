const prompt = require('prompt-sync')();

module.exports = function repeticao() {
    let numero = parseInt(prompt('Digite um número inteiro: '));

    for (let i = 0; i < 10; i++){
        console.log(numero)
    }
}