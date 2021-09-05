/**
 * Exercícios Aula 02
 * 01. Crie uma função que recebe um array de 2 números e coloque eles em ordem 
 * crescente. Não use o método sort.
 * 
*/

function ordemCrescente2(array)
{
    // inverter, se: o elemento [0] do array for !maior! que o elemento[1];
    if (array[0] > array[1])
    {
        const aux = array[0];
        array[0] = array[1];
        array[1] = aux;
    }
    return array;
}

console.log(ordemCrescente2([10,2]));