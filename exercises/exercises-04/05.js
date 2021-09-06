/**
 * 5 – Crie um programa que entre com os dados de altura e sexo de 5 pessoas. 
 * Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são 
 * do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um 
 * homem ou uma mulher.
 * 
 * Entrada: altura,sexo
 * Processo:
 *  1. Entrada de dados separados por vírgula; h,g
 *  2. Verifica qual o 'gender' e guarda na variavel de controle de quantidade de cada;
 *  3. A cada entrada de dados compara a altura (para saber a maior), guarda essa altura e gênero;
 *  4. Retorna os contadores e maior altura (e gênero);
 * Saída: qte masculino, qte feminino, sexo da maior altura
 */

const readlineSync = require('readline-sync');
let run = true;
let contRead = 0;
let contF = 0, contM = 0, contO = 0;
let tallest = {height: 0, gender: ''};
let person = [];

do {
    if (contRead === 5) { run = false }
    else {
        const input = readlineSync.question(`Entre com a altura e sexo da pessoa (a,s) 0${contRead + 1}: `);
        person = input.split(',');
        updateCounters(person);
        findHighest(person);
        contRead++;
    }

} while (run);

console.log(`Há ${contF} pessoas do sexo feminino, ${contM} do masculino e ${contO} de outros.`);
console.log(`A pessoa mais alta tem ${tallest.height} de altura e tem como gênero: ${tallest.gender}`)


function updateCounters(array) {
    switch (array[1]) {
        case 'F':
            contF++;
            break;
        case 'M':
            contM++;
            break;
        default:
            contO++;
            break;
    }
}

function findHighest(array) {
    if (Number(array[0]) >= tallest.height) {
        tallest.height = Number(array[0]);
        tallest.gender = array[1];
    }
}