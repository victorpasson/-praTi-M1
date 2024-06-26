obj1 = {
    primeiroNome: "João Victor",
    sobreNome: "Vieira Passon",
    idade: 25,
    altura: 1.70,
    peso: 72 
}

obj2 = {
    sobreNome: "Passon",
    altura: 1.69,
    email: "victor.passon@yahoo.com.br"
}

function concatObjects(obj1, obj2){
    let new_objects = Object.assign(obj1, obj2);

    return new_objects;
}

console.log(concatObjects(obj1, obj2));