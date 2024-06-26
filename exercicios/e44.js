obj = {
    primeiroNome: "João Victor",
    sobreNome: "Vieira Passon",
    idade: 25,
    altura: 1.70,
    peso: 72,
    cantores: ["Bruno e Marrone", "Gusttavo Lima", "Ana Castela"],
    atores: ["Selton Melo", "Wagner Moura", "Bruna Marquezine"]
}

function qtdStrings(obj) {
    let contador = 0
    for (key in obj){
        if (typeof obj[key] == "string"){
            contador++
        }
    }

    return contador;
}

console.log(qtdStrings(obj));