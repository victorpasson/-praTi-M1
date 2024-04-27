const prompt = require('prompt-sync')();

function toFahrenheit() {
    let celsius = parseFloat(prompt('Digite a temperatura em °C: '));

    let fahrenheit = (celsius * 9/5) + 32;

    console.log(`A temperatura em Fahrenheit é ${fahrenheit}°F`);

    return fahrenheit;
}

module.exports = toFahrenheit;