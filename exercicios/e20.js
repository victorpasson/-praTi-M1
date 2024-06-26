const prompt = require('prompt-sync')();

let listaFuncionarios = [
    [0, "João", 1200],
    [1, "Manoel", 1300],
    [2, "Maria", 1450],
    [3, "Carlos", 900],
    [4, "Patricia", 1000],
    [5, "Roberta", 1250],
    [6, "Matheus", 3200],
    [7, "Enzo", 3600],
    [8, "Valentina", 1200],
    [9, "Arquimendes", 4800],
]
function processaTabela(tabela){
    tabela.forEach(linha => {
        console.log(`
Matrícula: ${linha[0]}
Nome: ${linha[1]}
Salário Bruto: ${linha[2]}
Dedução INSS: ${Math.floor(linha[2] * 0.12 * 100) / 100}
Salário Líquido: ${Math.floor(linha[2] * 0.88 * 100) / 100}
`)
    })
}

processaTabela(listaFuncionarios);