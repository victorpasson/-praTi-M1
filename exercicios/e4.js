const prompt = require('prompt-sync')();

module.exports = function() {
    let nota1 =  parseFloat(prompt('Digite a primeira nota: '));
    let nota2 =  parseFloat(prompt('Digite a segunda nota: '));

    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
        return console.log('PARABENS! Você foi aprovado!');
    }

}