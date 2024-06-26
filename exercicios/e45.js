let strings = ["João", "Victor", "Vieira", "Passon", "Flamengo", "Vila Velha", "João", "Flamengo", "João", "Teste"];

let obj = {};

for (let i = 0; i < strings.length; i++){
    let filter = strings.filter(item => item == strings[i]);
    let counter = filter.length;
    obj[strings[i]] = counter
}

console.log(obj);