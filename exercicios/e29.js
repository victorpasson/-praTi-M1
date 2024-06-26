function SomasMatriz(matriz){
    let SomaLinha4 = 0;
    let SomaColuna2 = 0;
    let SomaDiagPrincipal = 0;
    let SomaTodosElementos = 0;

    for (let i = 0; i < matriz.length; i++){
        for  (let j = 0; j < matriz[i].length; j++){
            if (i == 3){
                SomaLinha4 += matriz[i][j];
            }
            
            if (j == 1){
                SomaColuna2 += matriz[i][j];
            }

            if (i == j){
                SomaDiagPrincipal += matriz[i][j];
            }

            SomaTodosElementos += matriz[i][j];
        }
    }

    console.log("---------- Matriz ----------")
    matriz.forEach(linha => {
        let exibicao = ""
        linha.forEach(item => {
            exibicao = exibicao + item + " "
        })
        console.log(exibicao)
    });
    console.log();
    console.log("---------- Somas ----------")
    console.log(`
Soma da Linha 4 : ${SomaLinha4}
Soma da Coluna 2: ${SomaColuna2}
Soma da Diagonal Principal: ${SomaDiagPrincipal}
Soma de Todos os Elementos: ${SomaTodosElementos}
        `)

    return {SomaLinha4, SomaColuna2, SomaDiagPrincipal, SomaTodosElementos};
}

matriz = [
    [1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 2, 1, 1, 0],
    [0, 1, 1, 0, 1],
]

SomasMatriz(matriz);