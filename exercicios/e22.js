function pesquisa (salarios, filhos) {
    let sumSalarios = 0;
    let numSalarios = 0;
    let supSalarios = 0;

    salarios.forEach(salario => {
        sumSalarios += salario
        numSalarios++

        if (salario <= 350) {
            supSalarios++
        }
    });

    let sumFilhos = 0;
    let numFilhos = 0;

    filhos.forEach(filho => {
        sumFilhos += filho
        numFilhos++
    })

    let mediaSalario = Math.floor((sumSalarios / numSalarios) * 100) / 100;
    let mediaFilhos = Math.floor((sumFilhos / numFilhos) * 100) / 100;
    let maiorSalario = Math.max(...salarios);
    let porcentagem = Math.floor((supSalarios/numSalarios) * 10000) / 100;

    return {mediaSalario, mediaFilhos, maiorSalario, porcentagem}

}

let test = pesquisa([1200, 1400, 3000, 320], [1, 3, 6, 4]);
console.log(test);