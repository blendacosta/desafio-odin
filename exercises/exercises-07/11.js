/**
 *  11. Crie uma função que retorne o ultimo dia de um mês
 */

function lastDayMonth(month) {
    const date = new Date(2021, month, 0);
    console.log(date.toUTCString());
}

lastDayMonth(9);