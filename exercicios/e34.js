function MultElemDiag(matriz){
    let newMatriz = Array();
    
    for (let i = 0; i < matriz.length; i++){
        let newLinha = Array();

        for (let j = 0; j < matriz[i].length; j++){
            newLinha.push(matriz[i][j] * matriz[i][i]);
        }

        newMatriz.push(newLinha);
    }

    console.log("---------- Matriz Lida ----------");
    matriz.forEach(linha => {
        let exibicao = ""
        linha.forEach(item => {
            exibicao = exibicao + item + " "
        })
        console.log(exibicao)
    });

    console.log("---------- Matriz Modificada ----------");
    newMatriz.forEach(linha => {
        let exibicao = ""
        linha.forEach(item => {
            exibicao = exibicao + item + " "
        })
        console.log(exibicao)
    });

    return newMatriz;
}

matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [6, 5, 4, 3, 2, 1],
    [12, 11, 10, 9, 8, 7],
    [18, 17, 16, 15, 14, 13]
];

MultElemDiag(matriz);

