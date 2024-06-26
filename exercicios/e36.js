function loteria(vetor13, apostadores){
    let ganhadores = Array();
    for (let i = 0; i < apostadores.length; i++){
        let count_acertos = 0;
        apostadores[i].respostas.forEach(item => {
            let resultado = vetor13.filter(verifica => verifica == item);
            if(resultado.length > 0) {
                count_acertos++
            }
        })

        if(count_acertos == 13){
            console.log(`Apostador: ${apostadores[i].apostador} | Parabéns, tu foi o GANHADOR!`);
            ganhadores.push(apostadores[i]);
        }else{
            console.log(`Apostador: ${apostadores[i].apostador} | Acertos: ${count_acertos}`);
        }
    }

    return ganhadores;
}

let teste = [
    {
        apostador: 123,
        respostas: [1, 2, 16, 4, 5, 6, 7, 8, 9, 21, 26, 14, 13]
    },
    {
        apostador: 154,
        respostas: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    },
    {
        apostador: 134,
        respostas: [17, 99, 87, 90, 1, 60, 44, 12, 25, 44, 26, 32, 76]
    },
    {
        apostador: 100,
        respostas: [101, 102, 102, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113]
    }
];

let ganhadores = loteria([14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], teste);
console.log(ganhadores);