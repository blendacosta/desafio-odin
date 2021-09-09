/**
 *  8. Crie uma função que retorne o número de dias dado o número (não o indice) do mês.
 */

function daysInAMonth(month, year = '2021') {

    const date = new Date(year, month, 0);
    const days = date.getDate();

    console.log(`No mês ${month} há ${days} dias.`);
}

daysInAMonth(9); // => 30