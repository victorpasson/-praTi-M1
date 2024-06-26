function DivisionMatrixElement(matriz){
    let newMatriz = Array();
    for(let i = 0; i < matriz.length; i++){
        let maiorElementoLinha = 1;
        let newLinha = Array();

        // Descobrindo o maior numero da linha em modulo
        for (let j = 0; j < matriz[i].length; j++){
            if (Math.sign(matriz[i][j]) == -1){
                if ((matriz[i][j] * -1) > maiorElementoLinha){
                    maiorElementoLinha = matriz[i][j] * -1;
                }
            } else if(matriz[i][j] > maiorElementoLinha){
                maiorElementoLinha = matriz[i][j]
            }
        }

        // Dividindo cada item pelo maior numero
        matriz[i].forEach(item => {
            newLinha.push(Math.floor((item / maiorElementoLinha) * 100) / 100);
        })

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
    [1, 2, 3, 4, 50, 6, 7, 8, 9, 10, 11, 12, 13],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
    [41, 42, 43, 44, 45, -77, 47, 48, 49, 50, 51, 52, 53],

];

DivisionMatrixElement(matriz);