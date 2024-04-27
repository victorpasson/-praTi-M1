const prompt = require('prompt-sync')();

module.exports = function e6() {
    let ladoA = parseFloat(prompt('Digite o valor do lado A: '));
    let ladoB = parseFloat(prompt('Digite o valor do lado B: '));
    let ladoC = parseFloat(prompt('Digite o valor do lado C: '));

    if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log('Triângulo Equilátero');
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log('Triângulo Isósceles');
        } else {
            console.log('Triângulo Escaleno');
        }
    }
}