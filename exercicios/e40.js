function Loto(resultado, apostas){
    apostas.forEach((aposta, index) => {
        let qtdAcertos = 0;
        aposta.forEach(itemAposta => {
            if (resultado.filter(itemResultado => itemResultado == itemAposta).length > 0){
                qtdAcertos++
            };
        })

        if(qtdAcertos == 5){
            console.log(`Index ${index}: Ganhador`);
        }
    });
}

let apostasFeitas = [
    [19, 21, 35, 44, 59],
    [6, 12, 45, 57, 59],
    [5, 9, 17, 24, 48],
    [11, 45, 36, 19, 52],
    [6, 19, 36, 45, 56],
];

Loto([6, 19, 36, 45, 56], apostasFeitas);