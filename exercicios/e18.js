const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do funcionário: ");
let cargo = prompt("Digite o cargo do funcionário: ");
let salario = parseFloat(prompt("Digite o salário do funcionário: "));

let funcionario = {
    nome,
    cargo,
    salario
}

console.log(`
        Funcionário: ${nome}
        Cargo: ${cargo}
        Salário: ${salario}
    `)