/**
 *  3. Crie uma função para verificar se uma data inserida pela usuário é uma data 
 *  válida. Dado a entrada do usuário você deve dizer se ela é uma data válida ou não.
 */

const readlineSync = require('readline-sync');
const input = readlineSync.question('Entre com a data (yyyy-MM-dd): ');

let date = Date.parse(input); // retorna o número de milisegundos desde 1 de Janeiro se for válida;

if (isNaN(date)) { // verifica que não é um número caso não for válida;
    console.log("Não é uma data válida.");
} else {
    console.log("É uma data válida.");
}