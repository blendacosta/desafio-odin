/**
 *  7. Escreva uma função para encontrar um elemento em um array, caso exista 
 *  retornar a posição, caso não exista retornar null.
 */

const findIndex = (arr, element) => {
    const index = arr.indexOf(element);
    return index >= 0 ? index : null;
}

console.log(findIndex([1,2,3,4,5], 4));
console.log(findIndex([1,2,3,4,5], 10));
