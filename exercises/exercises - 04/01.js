/**
 * 1 – Calcule a média de diversas notas digitadas pelo usuário. O número de notas 
 * pode variar. O usuário vai usar o comando "fim" para dizer quando as notas 
 * acabaram e o calculo da média pode ser feita.
 */

const readlineSync = require('readline-sync');

let run = true;
const grades = [];

function calculateAverage(array)
{
    let average = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        sum += parseInt(array[i]);
    }
    average = sum/array.length;
    return average.toFixed(2); 
}

while (run) {
    const input = readlineSync.question("Entre com a nota (fim para sair): ");

    if (input == 'fim') { run = false; }
    else { grades.push(input); }
}

console.log(grades);
console.log('Média: ' + calculateAverage(grades));