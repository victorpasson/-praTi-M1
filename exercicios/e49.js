let transacoes = [
    {
        id: 1,
        valor: 50,
        data: Date.now(),
        categoria: "vestuario"
    },
    {
        id: 2,
        valor: 150,
        data: Date.now(),
        categoria: "balada"
    },
    {
        id: 3,
        valor: 30,
        data: Date.now(),
        categoria: "vestuario"
    },
    {
        id: 4,
        valor: 20,
        data: Date.now(),
        categoria: "comida"
    },
    {
        id: 5,
        valor: 150,
        data: Date.now(),
        categoria: "comida"
    },
    {
        id: 6,
        valor: 250,
        data: Date.now(),
        categoria: "balada"
    },
    {
        id: 7,
        valor: 550,
        data: Date.now(),
        categoria: "comida"
    },
    {
        id: 8,
        valor: 230,
        data: Date.now(),
        categoria: "combustivel"
    },
]

function categorize(vetor){
    let newObjeto = {};
    vetor.forEach(objeto => {
        if(newObjeto[objeto.categoria]){
            newObjeto[objeto.categoria]["valores"].push(objeto["valor"]);
            newObjeto[objeto.categoria]["subtotal"] += objeto["valor"];
        }else{
            newObjeto[objeto.categoria] = {
                valores: [objeto["valor"]],
                subtotal: objeto["valor"]
            }
        }
    })

    return newObjeto;
}

console.log(categorize(transacoes));