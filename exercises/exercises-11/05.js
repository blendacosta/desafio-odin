/**
 *  5. Escreva uma função que ordene os elementos de um array de ordem decrescente.
 */

const descendingOrder = (arr) => {
    return arr.sort((a,b) => b - a);
}

console.log(descendingOrder([3,1,15,2,10]));