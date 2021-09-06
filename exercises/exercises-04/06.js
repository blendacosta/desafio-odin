/**
 * 6 – Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes 
 * digitados, porém de maneira invertida (do último para o primeiro).
 * 
 * Entrada: nomes em uma ordem
 * Processo:
 *  1. Armazenar os nomes inseridos em um array
 *  2. Imprimir o array de forma invertida
 * Saída: nomes na ordem invertida
 */

const readlineSync = require('readline-sync');
let run = true;
const names = [];

while (run) {
    const input = readlineSync.question('Entre com o nome (fim para sair): ');
    if (input == 'fim') { run = false }
    else {
        names.push(input);
    }
}

printReverseOrder(names);

function printReverseOrder(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}