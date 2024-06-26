let matriz = Array();

for (let i = 0; i < 7; i++){
    let linha = Array();

    for (let j = 0; j < 7; j++){
        if(i == j){
            linha.push(1);
        }else {
            linha.push(0);
        }
    }
    matriz.push(linha);
}

matriz.forEach(linha => {
    let exibicao = ""
    linha.forEach(item => {
        exibicao = exibicao + item + " "
    })
    console.log(exibicao)
});
