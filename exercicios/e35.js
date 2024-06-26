function sepParImpar(vetor30){
    let vetorPar = Array(5);
    let vetorImpar = Array(5);

    let contPar = 0;
    let contImpar = 0;
    for (let i = 0 ; i < vetor30.length ; i++){
        if (vetor30[i] % 2 == 0){
            if (contPar < 5){
                vetorPar[contPar] = vetor30[i];
                contPar++
            } else {
                console.log("Vetor Par  : " +vetorPar);
                vetorPar = Array();
                vetorPar[0] = vetor30[i];
                contPar = 1;
            }
        } else{
            if (contImpar < 5){
                vetorImpar[contImpar] = vetor30[i];
                contImpar++
            } else {
                console.log("Vetor Impar: " + vetorImpar);
                vetorImpar = Array();
                vetorImpar[0] = vetor30[i];
                contImpar = 1;
            }
        }
    }

    console.log("--------- Vetor Final ---------");
    console.log("Vetor Par  :" + vetorPar);
    console.log("Vetor Impar:" + vetorImpar);
}

sepParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);