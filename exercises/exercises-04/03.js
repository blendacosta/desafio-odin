/*
 * 3 – Peça ao usuário para digitar 5 números. Verifique qual é o maior número e exiba-o.
 */

const readlineSync = require('readline-sync');
let run = true;
let cont = 0;
const numbers = [];

do {
    if (cont == 5) { run = false; }
    else { 
        const input = readlineSync.question(`Entre com o numero ${cont+1}: `);
        let inputNum = parseInt(input);
        numbers.push(inputNum);
        cont++;
    }
} while (run)

console.log(numbers);
console.log('Maior numero: ' + Math.max(...numbers)); 