/**
 * Exercicios 02
 * 03. Crie um script que pergunte 3 números ao usuário, coloque em um array,
 * depois exiba tal array. Modifique os elementos do array de modo a a sequência
 * de números ficar do contrário. Ou seja, se digitou: 1,2,3
 * Vai aparecer: 3,2,1
 */


 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 rl.question('Digite os 3 numeros separados por virgula: ', (answer) => {
     const numbers = answer.split(',')
 
     const newArray = [];
 
     for(let i = numbers.length - 1; i >= 0; i--) {
         newArray.push(numbers[i]);
     }
 
     console.log(newArray);
     
     rl.close()
 });
