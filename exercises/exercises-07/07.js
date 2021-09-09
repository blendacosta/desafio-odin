/**
 *  7. Crie um array com datas de quando você foi à academia ou fez atividade 
 *  fisica. Crie uma função para verficar se dado um array de datas, você fez 
 *  atividade física no primeiro dia do ano de 2021.
 */

 const logDates = [
    '2021-01-01',
    '2021-08-03',
    '2021-07-20',
    '2021-07-21',
    '2021-07-22',
    '2021-06-03',
    '2021-06-02',
    '2021-06-01'
];

function exercisedFirstDayYear(log) {
    const firstDayOfYear = new Date('2021-01-01');

    for (let date of log) {
        const dateConverted = new Date(date);

        if (dateConverted.getTime() == firstDayOfYear.getTime())
        {
            return 'SIM';
        }
    }

    return 'NÃO';
}

const result = exercisedFirstDayYear(logDates);

console.log("O usuário se exercitou no primeiro dia do ano: " + result);