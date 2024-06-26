function prodMatriz(matriz1, matriz2){
    let prodResult = Array()
    for (let i = 0; i < matriz1.length; i++){
        let linha = Array();
        for (let j = 0; j < matriz1[i].length; j++){
            let prod = matriz1[i][j] * matriz2[i][j];
            linha.push(prod);
        }
        prodResult.push(linha);
    }

    return prodResult;
}

matriz1 = [
    [1, 2, 3, 4, 5],
    [3, 2, 1, 2, 3],
    [7, 4, 9, 8, 7]
]

matriz2 = [
    [7, 4, 9, 8, 7],
    [1, 2, 3, 4, 5],
    [3, 2, 1, 2, 3]
]

console.log(prodMatriz(matriz1, matriz2));