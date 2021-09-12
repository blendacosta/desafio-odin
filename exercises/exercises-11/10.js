/**
 *  10. Escreva uma função que dado um array que pode ter números duplicados, 
 *  limpe o array de maneira que tenhamos um array com apenas elementos unicos.
 * 
 *  console.log(unique([1,1,2,2])); // => [1,2] 
 *  console.log(unique([1,2,2,3,4,4])); // => [1,2,3,4]
 */

const unique = (arr) => {
    const set = new Set(arr);
    return [...set];
}

console.log(unique([1,1,2,2]));
console.log(unique([1,2,2,3,4,4]));