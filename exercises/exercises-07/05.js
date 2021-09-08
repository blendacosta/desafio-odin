/**
 *  5. Cria uma função que retorne o número de dias entre duas datas.
 */

function diffBetweenDates(start, end) {
    const msDay = 86400000; //1000 ms * 60 s * 60 m * 24 h
    const dateStart = new Date(start);
    const dateEnd = new Date(end);
    const diff = Math.abs(dateStart.getTime() - dateEnd.getTime());
    const days = Math.floor(diff/msDay);

    return days;
}

console.log(diffBetweenDates('2021-09-07', '2021-09-01'));
console.log(diffBetweenDates('2021-09-01', '2021-09-07'));