const prompt = require('prompt-sync')();

module.exports = function() {
    let totalEleitores = parseInt(prompt('Digite o total de eleitores: '));
    let votosBranco = parseInt(prompt('Digite o total de votos em branco: '));
    let votosNulos = parseInt(prompt('Digite o total de votos nulos: '));
    let votosValidos = parseInt(prompt('Digite o total de votos válidos: '));

    console.log(`O percentual de votos em branco é: ${(votosBranco / totalEleitores) * 100}%`);
    console.log(`O percentual de votos nulos é: ${(votosNulos / totalEleitores) * 100}%`);
    console.log(`O percentual de votos válidos é: ${(votosValidos / totalEleitores) * 100}%`);

    return {
        totalEleitores,
        votosBranco,
        votosNulos,
        votosValidos
    };
}

