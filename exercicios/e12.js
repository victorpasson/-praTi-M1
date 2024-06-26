const prompt = require('prompt-sync')();

let anterior = 0;
let fibonacci = [1];

for (let i = 0; i < 9; i++){
    fibonacci.push(fibonacci[fibonacci.length - 1] + anterior);
    anterior = fibonacci[fibonacci.length - 2];
}

console.log(fibonacci);