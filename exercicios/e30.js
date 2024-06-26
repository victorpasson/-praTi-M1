function SomaLinhaColuna(matriz){
    let SL = Array(5);
    let SC = Array(5);

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (SL[i]){
                SL[i] = SL[i] + matriz[i][j];
            } else {
                SL[i] = matriz[i][j];
            }

            if (SC[j]){
                SC[j] = SC[j] + matriz[i][j];
            } else {
                SC[j] = matriz[i][j];
            }
        }
    }

    console.log("---------- Matriz ----------");
    matriz.forEach(linha => {
        let exibicao = ""
        linha.forEach(item => {
            exibicao = exibicao + item + " "
        })
        console.log(exibicao)
    });

    console.log("---------- Vetores ----------");
    console.log(`
Soma das Linhas : ${SL}
Soma das Colunas: ${SC}
        `);

    return {SL, SC};

}

matriz = [
    [1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 2, 1, 1, 0],
    [0, 1, 1, 0, 1],
]

SomaLinhaColuna(matriz);