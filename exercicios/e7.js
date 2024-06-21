const prompt = require('prompt-sync')();

console.log("Infome o tipo de carro alugado:\n1 - Popular\n2 - Luxo\n");
let tipo = parseInt(prompt("Tipo (em número): "));
let dias = parseInt(prompt("Informe os dias de aluguel: "));
let km = parseInt(prompt("Informe quanto KM foram percorridos: "));

console.log();
let valor;
switch (tipo) {
    case 1:
        if(km <= 100){
            valor = 0.2 * km;
        }else{
            valor = 0.1 * km;
        }
        break;
    case 2:
        if(km <= 200){
            valor = 0.3 * km;
        }else{
            valor = 0.25 * km;
        }
        break;
    default:
        valor = undefined;
}

valor = Math.floor(valor * 100) / 100

if(valor){
    console.log(`Valor a ser pago: R$ ${valor}`);
}else{
    console.log("Digite um tipo válido.")
}