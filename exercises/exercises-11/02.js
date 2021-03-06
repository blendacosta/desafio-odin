/**
 *  2. Escreva uma função que recebe um array e retorna o primeiro elemento do 
 *  array se nenhum outro argumento for passado, porém se outro argumento for 
 *  passado ela vai retornar os "n" primeiros elementos do array.
 * 
 *  console.log(first([1,2,3])) // => 1 
 *  console.log(first([1,2,3], 2)) // => [1,2]
 */

const first = (arr, n = 1) => {
    return arr.slice(0, n);
}

console.log(first([1,2,3]));
console.log(first([1,2,3], 2));
