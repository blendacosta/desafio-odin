/**
 *  1. Escreva uma função que verifica se uma entrada é um array ou não.
 * 
 *  console.log(is_array('mentoria')); // => false 
 *  console.log(is_array([1, 2, 4, 0])); // => true
 */

const is_array = (dado) => {
    return Array.isArray(dado);
}

console.log(is_array('mentoria'));
console.log(is_array([1, 2, 4, 0]));