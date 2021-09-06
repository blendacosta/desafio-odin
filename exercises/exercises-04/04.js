/*
 * 4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior 
 * de idade (18 anos) e quantas são menores.
 */

const readlineSync = require('readline-sync');
let run = true;
let over18 = 0;
let under18 = 0;

while (run) {
    const input = readlineSync.question("Entre com a idade (fim para sair): ");

    if (input == 'fim') { run = false; }
    else {
        let inputNum = parseInt(input); 
        if (inputNum >= 18) {
            over18++;
        } else {
            under18++;
        }
    }
}
console.log('Maiores de idade: ' + over18); 
console.log('Menores de idade: ' + under18);
