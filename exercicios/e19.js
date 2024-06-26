const prompt = require('prompt-sync')();

let horarios = Array();
let count = 0;

while(count < 5){
    console.log("-------- Horário " + (count + 1) + " --------");
    let hora = parseInt(prompt("Digite a hora (0-23): "));
    let minuto = parseInt(prompt("Digite os minutos (0-59): "));
    let segundo = parseInt(prompt("Digite os segundos (0-59): "));

    if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59){
        console.log("Horário inválido. Certifique-se de que os valores estão dento da faixa permitida.")
        continue;
    }

    let nDate = new Date();
    nDate.setHours(hora);
    nDate.setMinutes(minuto);
    nDate.setSeconds(segundo);

    horarios.push(nDate);    
    count++
};

horarios.forEach(horario => {
    console.log(`${horario.getHours().length = 2 ? "0" + horario.getHours() : horario.getHours()}.${horario.getMinutes().length = 2 ? "0" + horario.getMinutes() : horario.getMinutes()}.${horario.getSeconds().length = 2 ? "0" + horario.getSeconds() : horario.getSeconds()}`)
});