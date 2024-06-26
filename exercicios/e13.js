prompt = require('prompt-sync')();

let fibonacci = [1];

for (let i = 0; i < 14; i++){
    fibonacci.push(fibonacci[fibonacci.length - 1] + (fibonacci[fibonacci.length - 2] ? fibonacci[fibonacci.length - 2] : 0));
}

console.log(fibonacci);