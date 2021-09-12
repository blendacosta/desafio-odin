/**
 *  9. Escreva uma função que cria um novo array com quantidade de elementos e o 
 *  valor dados pelo usuário.
 *  
 *  console.log(fill(3, 'a')); // => ['a', 'a', 'a'] 
 *  console.log(fill(2, 'Marcle')); // => ['Marcle', 'Marcle'
 */

const fill = (n, value) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(fill(3, 'a'));
console.log(fill(2, 'Marcle'));