/**
 *  6. Crie um array com datas de quando você foi à academia ou fez atividade 
 *  fisica. Crie uma função para verficar se dado um array de datas, você fez 
 *  atividade física nos ultimos sete dias.
 */

const logDates = [
    '2021-09-08',
    '2021-08-03',
    '2021-07-20',
    '2021-07-21',
    '2021-07-22',
    '2021-06-03',
    '2021-06-02',
    '2021-06-01'
];


function exercisedLast7days(log) {
    const msDay = 86400000;
    const sevenDaysAgoMs = new Date().getTime() - (msDay*7);

    for (let date of log) {
        if (new Date(date).getTime() > sevenDaysAgoMs) {
            return 'SIM';
        }
    }
    return 'NÃO';
}

const result = exercisedLast7days(logDates);

console.log("O usuário se exercitou nos últimos 7 dias: " + result);