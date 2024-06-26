const prompt = require('prompt-sync')();

let homem = Array();
let mulher = Array();

let opcao;
let sumHomens = 0;
let sumMulheres = 0;

while(opcao != 0){

    let sexo = parseInt(prompt("Digite o sexo do funcionário (0 - Homem | 1 - Mulher): "));
    let salario = parseFloat(prompt("Digite o salário do funcionário: "));
    if(sexo == 0){
        homem.push(salario);
    } else if (sexo == 1){
        mulher.push(salario);
    }

    opcao = parseInt(prompt("Deseja continuar? (0 - Não | 1 - Sim) "));
}

homem.forEach(men => sumHomens += men);
mulher.forEach(woman => sumMulheres += woman);
console.log("------------------------------------------");
console.log(`Total Salário Homens   - R$ ${sumHomens}`);
console.log(`Total Salário Mulheres - R$ ${sumMulheres}`);