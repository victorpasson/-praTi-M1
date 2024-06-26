function applyFunction(objeto, funcao){
    let newObjeto = {}
    for (key in objeto){
        newObjeto[key] = funcao(objeto[key]);
    }

    return newObjeto;
}

let objeto = {
    macas: 10,
    laranjas: 20,
    banana: 50,
    maracuja: 25
}

testeObjeto = applyFunction(objeto, (item) => item * 10);

console.log(testeObjeto);