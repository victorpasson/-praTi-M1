const prompt = require('prompt-sync')();

module.exports = function e7() {
    let macasQuantidade = parseInt(prompt('Digite a quantidade de maçãs compradas: '));

    if (macasQuantidade < 12) {
        console.log(`O valor total da compra é R$ ${macasQuantidade * 0.30}`);
    } else {
        console.log(`O valor total da compra é R$ ${macasQuantidade * 0.25}`);
    }
}