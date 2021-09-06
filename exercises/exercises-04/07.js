/**
 * 7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano.
 */

const readlineSync = require('readline-sync');

const input = readlineSync.question('Entre com a data (dd/MM/YYYY ou dd-MM-YYYY): ');
const aux = input.split(/-|\//);

let day = aux[0];
let month = aux[1];
let year = aux[2];

console.log(`Dia: ${day}, Mês: ${month}, Ano: ${year}`);