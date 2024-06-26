function DivPrincSecund(matriz){
    let countDiagSecund = 0;
    let sumDiagSecund = 0;

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (i + j == matriz.length - 1){
                countDiagSecund++;
                sumDiagSecund += matriz[i][j];
            }
        }
    }

    let meanSecund = sumDiagSecund / countDiagSecund;

    let multDiagPrinc = Array();

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (i == j){
                multDiagPrinc.push(Math.floor(matriz[i][j] * meanSecund * 100) / 100);
            }
        }
    }

    console.log("---------- Multiplicação da Diagonal Principal ----------");
    console.log(multDiagPrinc);

    return multDiagPrinc;

}

matriz = [
    [1, 7, 4],
    [0, 9, 4],
    [8, 8, 2]
]

DivPrincSecund(matriz);