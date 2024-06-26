const prompt = require('prompt-sync')();

function AcaoInVetor(vetor, opcao){
    switch (opcao) {
        case 1:
            let sum = 0
            vetor.forEach(item => {
                sum += item;
            });
            console.log("Soma dos Elementos: " + sum);
            break;
        case 2:
            let mult = 1;
            vetor.forEach(item => {
                mult *= item
            });
            console.log("Produto dos Elementos: " + mult);
            break;
        case 3:
            let sum2 = 0;
            let count = 0;
            vetor.forEach(item => {
                sum2 += item;
                count++
            });
            let media = Math.floor((sum2 / count) * 100) / 100;
            console.log("Média dos Elementos: " + media);
            break;
        case 4:
            vetor.sort();
            console.log("Vetor ordenado: " + vetor);
            break;
        case 5:
            console.log("Vetor: " + vetor);
    }
}

let operacao = 1
while (operacao != 0) {
    console.log(`
0 - Sair
1 - Soma dos elementos;
2 - Produto dos elementos;
3 - Média dos elementos;
4 - Ordene os elementos em ordem crescente;
5 - Mostre o vetor.
`)
    operacao = parseInt(prompt("Digite a operacao desejada: "))
    if (operacao == 0){
        break
    }
    let vetor = prompt("Digite 6 valore, separados por vírgulas: ").split(",");
    vetor = vetor.map(item => parseFloat(item.trim()));
    AcaoInVetor(vetor, operacao);
}