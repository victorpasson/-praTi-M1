function filterByA(A,matriz) {
    let newMatriz = Array();
    let countA = 0;

    matriz.forEach(linha => {
        filtered = linha.filter(item => item != A);
        newMatriz.push(filtered);
        countA += (linha.length - filtered.length);
    })

    console.log("Valores iguais a A na Matriz: " + countA);
    console.log("-------- Valores da Matriz diferente de A --------")
    newMatriz.forEach(linha => {
        let exibicao = ""
        linha.forEach(item => {
            exibicao = exibicao + item + " "
        })
        console.log(exibicao)
    });
    
    return {newMatriz, countA};
}

let matriz = [
    [1, 7, 4, 1, 5, 7, 9],
    [0, 9, 4, 5, 5, 7, 9],
    [8, 8, 2, 9, 5, 7, 9],
    [4, 8, 2, 9, 5, 7, 9],
    [8, 8, 4, 9, 5, 7, 9],
    [8, 8, 2, 9, 5, 7, 9],
    [4, 4, 2, 9, 5, 7, 9],
]

filterByA(9, matriz);