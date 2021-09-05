/*
 * 2 – Faça um programa que peça números e imprima o quadrado de cada número.
 */

const readlineSync = require('readline-sync');
let run = true;

function square(num) {
    return num**2;
}

while (run) {
    const input = readlineSync.question("Entre com o numero (fim para sair): ");

    if (input == 'fim') { run = false; }
    else { 
        let inputNum = parseInt(input);
        console.log(`Quadrado de ${input}: `+ square(inputNum)) 
    }
}

