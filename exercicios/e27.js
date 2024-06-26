function prodEscalar(matriz, escalar){
    let vetor = Array();
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            vetor.push(matriz[i][j] * escalar);
        }
    }

    console.log(vetor);
    return vetor;
}

matriz = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [6, 5, 4, 3, 2, 1],
    [12, 11, 10, 9, 8, 7],
    [18, 17, 16, 15, 14, 13]
]

prodEscalar(matriz, 2);