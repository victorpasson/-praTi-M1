/* 
    Para executar o programa, basta rodar o comando "node index.js" no terminal ou "npm start".
    Para mais informações, leia o README.md.
*/

const prompt = require('prompt-sync')();

const exercicio1 = require('./exercicios/e1');
const exercicio2 = require('./exercicios/e2');
const exercicio3 = require('./exercicios/e3');
const exercicio4 = require('./exercicios/e4');
const exercicio5 = require('./exercicios/e5');
const exercicio6 = require('./exercicios/e6');
const exercicio7 = require('./exercicios/e7');
const exercicio8 = require('./exercicios/e8');
const exercicio9 = require('./exercicios/e9');
const exercicio10 = require('./exercicios/e10');
const exercicio11 = require('./exercicios/e11');
const exercicio12 = require('./exercicios/e12');
const exercicio13 = require('./exercicios/e13');
const exercicio14 = require('./exercicios/e14');
const exercicio15 = require('./exercicios/e15');
const exercicio16 = require('./exercicios/e16');

console.clear();

let opcao = -1;

do{
    console.log('Opções:');
    console.log('1 a 16 - Executar Exercício');
    console.log('17     - Verificação');
    console.log('0      - Sair');
    opcao = parseInt(prompt('Digite a opção desejada: '));
    console.clear();
    console.log(`####### Exercício escolhido: ${opcao} #######`);
    switch(opcao){
        case 1:
            exercicio1();
            break;
        case 2:
            exercicio2();
            break;
        case 3:
            exercicio3();
            break;
        case 4:
            exercicio4();
            break;
        case 5:
            exercicio5();
            break;
        case 6:
            exercicio6();
            break;
        case 7:
            exercicio7();
            break;
        case 8:
            exercicio8();
            break;
        case 9:
            exercicio9();
            break;
        case 10:
            exercicio10();
            break;
        case 11:
            exercicio11();
            break;
        case 12:
            exercicio12();
            break;
        case 13:
            exercicio13();
            break;
        case 14:
            exercicio14();
            break;
        case 15:
            exercicio15();
            break;
        case 16:
            exercicio16();
            break;
        case 17:
            console.clear();
            let opcaoVerificacao = -1;
            do{
                console.log('Verificação:');
                console.log('1 a 16 - Escolha o exercício para verificação');
                console.log('0      - Sair');
                opcaoVerificacao = parseInt(prompt('Digite a opção desejada: '));
                console.clear();
                console.log(`####### Exercício escolhido: ${opcaoVerificacao} #######`);
                switch(opcaoVerificacao){
                    case 1:
                        console.log(exercicio1.toString());
                        break;
                    case 2:
                        console.log(exercicio2.toString());
                        break;
                    case 3:
                        console.log(exercicio3.toString());
                        break;
                    case 4:
                        console.log(exercicio4.toString());
                        break;
                    case 5:
                        console.log(exercicio5.toString());
                        break;
                    case 6:
                        console.log(exercicio6.toString());
                        break;
                    case 7:
                        console.log(exercicio7.toString());
                        break;
                    case 8:
                        console.log(exercicio8.toString());
                        break;
                    case 9:
                        console.log(exercicio9.toString());
                        break;
                    case 10:
                        console.log(exercicio10.toString());
                        break;
                    case 11:
                        console.log(exercicio11.toString());
                        break;
                    case 12:
                        console.log(exercicio12.toString());
                        break;
                    case 13:
                        console.log(exercicio13.toString());
                        break;
                    case 14:
                        console.log(exercicio14.toString());
                        break;
                    case 15:
                        console.log(exercicio15.toString());
                        break;
                    case 16:
                        console.log(exercicio16.toString());
                        break;
                    default:
                        console.log('> Opção inválida!');
                }

            }while(opcaoVerificacao != 0 || opcaoVerificacao > 17);
            console.clear();
            break;
        case 0:
            console.clear();
            console.log('> Saindo...');
            break;
        default:
            console.log('> Opção inválida!');
    }
    console.log();
}while(opcao != 0);
