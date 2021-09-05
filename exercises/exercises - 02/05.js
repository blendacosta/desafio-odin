/**
 * 05. Crie uma função que recebe um vetor e um número. Ela deve mostrar todos
 * os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou
 * último índice em que o número aparece (como nos métodos indexOf e
 * lastIndexOf).
 * 
 */

// fun: recebe vetor e num
// mostrar todos os i que aparece num em vetor
// retorna esse vetor de posicões


function findIndex(array, num)
{
    const arrayIndex = [];

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === num)
        {
            arrayIndex.push(i);
        }
    }

    return arrayIndex;
}

console.log(findIndex([2,3,4,4,5,4,7,4], 4)); // r = [2,3,5,7]