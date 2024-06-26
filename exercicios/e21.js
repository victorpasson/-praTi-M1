const prompt = require('prompt-sync')();

function pesoIdeal (altura, sexo) {
    let ideal;
    if(sexo.toLowerCase() == "homem" || sexo.toLowerCase() == "h"){
        return ideal = 72.7 * altura - 58;
    } else if (sexo.toLowerCase() == "mulher" || sexo.toLowerCase() == "m"){
        return ideal = 62.1 * altura - 44.7;
    }

    return undefined;
}

let altura = parseFloat(prompt("Digite a altura (ex.: 1.7): "));
let sexo = prompt("Digite se é homem ou mulher: ");
console.log(pesoIdeal(altura, sexo));