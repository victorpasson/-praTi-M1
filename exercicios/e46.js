let vendas = [
    {
        "vendedor": "Carlos",
        "valor": 1200
    },
    {
        "vendedor": "Maria",
        "valor": 100
    },
    {
        "vendedor": "Roberto",
        "valor": 500
    },
    {
        "vendedor": "Carlos",
        "valor": 30
    },
    {
        "vendedor": "Maria",
        "valor": 5000
    },
    {
        "vendedor": "Roberto",
        "valor": 450
    },
    {
        "vendedor": "Roberto",
        "valor": 175
    },
    {
        "vendedor": "Joao",
        "valor": 175
    },
    {
        "vendedor": "Joao",
        "valor": 175
    },
];

function sumarizeVendas(vetor){
    let sumarizacao = {};
    vetor.forEach(objeto => {
        if(sumarizacao[objeto.vendedor]){
            sumarizacao[objeto.vendedor] = sumarizacao[objeto.vendedor] + objeto.valor;
        } else {
            sumarizacao[objeto.vendedor] = objeto.valor;
        }
    });

    return sumarizacao;
}

console.log(sumarizeVendas(vendas));