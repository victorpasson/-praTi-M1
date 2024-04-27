prompt = require('prompt-sync')();

module.exports = function tabuada() {

    for (let i = 0; i < 5; i++){
        let N = parseInt(prompt(`Digite um número (${i+1}/5): `));
        for (let j = 1; j <= N; j++){
            console.log(`${j}   x  ${N}   =   ${j * N}`)
        }
    }
}