/**
 *  6. Escreva uma função que remova um elemento especifico do array.
 * 
 *  console.log(remove([1,2,3], 3)); // => [1,2]
 */

const remove = (arr, element) => {
    const index = arr.indexOf(element);
    arr.splice(index, 1);
    return arr;
}
console.log(remove([1,2,3], 3));
