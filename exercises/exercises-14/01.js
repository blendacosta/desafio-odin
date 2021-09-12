/**
 *  1. Escreva uma função em JavaScript que reverta um número. 
 *  Exemplo: 1245   Saida Esperada: 5421
 */

let num = 1245;

const revert = (num) => {

    const invertedNum = String(num).split("").reverse().join("");

    return Number(invertedNum);
}

console.log(revert(num));