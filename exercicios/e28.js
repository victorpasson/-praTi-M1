function somaDiagonais(matriz) {
    let diagSup = 0;
    let diagInf = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if(i > j){
                diagInf += matriz[i][j];
            } else if (j > i){
                diagSup += matriz[i][j];
            }
        }
    }

    return {diagSup, diagInf};
}

matriz = [
    [1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 2, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
]

console.log(somaDiagonais(matriz))