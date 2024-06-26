const prompt = require('prompt-sync')();

let numeros = Array();
let opcao;

do{
    let numero = parseFloat(prompt("Digite o número: "))
    numeros.push(numero);
    opcao = parseInt(prompt("Deseja Continuar (0 - Sim | 1 - Não)? "))
}while(opcao != 1)

let sum = 0;
let qtd = 0;
let par = 0;

numeros.forEach(value => {
    sum += value;
    qtd += 1;
    if((value % 2) == 0){
        par += 1;
    }
})

let media = sum / qtd;

console.log("A) Somatório:   " + sum);
console.log("B) Menor Valor: " + Math.min(...numeros));
console.log("C) Média:       " + (Math.floor(media * 100) / 100));
console.log("D) Valores Par: " + par);