/**
 *  3. Escreva uma função que recebe um array e retorna o último elemento do array 
 *  se nenhum outro argumento for passado, porém se outro argumento for 
 *  passado ela vai retornar os ultimos "n" elementos do array.
 * 
 *  console.log(last([1,2,3])) // => 3 
 *  console.log(last([1,2,3], 2)) // => [2,3]
 */

const last = (arr, n = 1) => {
    return arr.slice(n * -1);
}

console.log(last([1,2,3]));
console.log(last([1,2,3], 2));