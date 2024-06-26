let dados = {
    id: 2,
    nome: "João Victor Vieira Passon",
    cantores: ["Bruno e Marrone", "Gusttavo Lima", "Ana Castela"],
    atores: ["Selton Melo", "Wagner Moura", "Bruna Marquezine"]
}

function justArray(dados){
    let new_dados = {}
    for (key in dados){
        if(Array.isArray(dados[key])){
            new_dados[key] = dados[key]
        }
    }
    return new_dados
}

console.log(justArray(dados));