function verificaGabarito(vetor, gabarito){
    vetor.forEach((aluno, index) => {
        let acertos = 0;
        for(let i = 0; i < aluno.length; i++){
            if(aluno[i] == gabarito[i]){
                acertos++
            }
        }

        if (acertos >= 12){
            console.log(`${index} - ${acertos} Acertos - APROVADO`);
        }else {
            console.log(`${index} - ${acertos} Acertos - REPROVADO`);
        }
    })
}

let R = [
    "AEDCBBEEDEAABBDCEACD",
    "EEDDBBAEDDABBBCCDBAE",
    "AECDDBAEDDABBBCCDBAE",
    "AECEDBAEDDAABBACDBAE",
    "AECEDBAEDDAABBACDBBB",
    "AECEDBAEDEAABBACDBBB",
    "AECEDBAEBEAAEBACDBBB"
]

verificaGabarito(R, "EEDDBBAEDDABBBCCDBAE")