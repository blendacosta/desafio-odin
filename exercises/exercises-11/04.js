/**
 *  4. Escreva uma função que ordene os elementos de um array de ordem crescente.
 */

const ascendingOrder = (arr) => {
    return arr.sort((a,b) => a - b);
}

console.log(ascendingOrder([3,1,15,2,10]));