function combInventario(obj1, obj2){
    let newObject = {...obj1}
    Object.keys(obj2).forEach(key => {
        if(newObject[key]){
            newObject[key] += obj2[key];
        } else {
            newObject[key] = obj2[key];
        }
    })

    return newObject;
}

let inventarioLojaA = {
    macas: 10,
    laranjas: 20,
    banana: 50,
    maracuja: 25
};

let inventarioLojaB = {
    macas: 25,
    laranjas: 7,
    banana: 2,
    kiwi: 40,
    abacate: 9
}

console.log(combInventario(inventarioLojaA, inventarioLojaB));

