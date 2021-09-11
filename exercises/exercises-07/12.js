/**
 *  12. Crie uma função que receba um array de datas e retorne a maior data.
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
]

const latestDate = (dates) => {
    let lastDate;

    dates.forEach((date, index) => {
        const day = new Date(date);

        if (index === 0) {
            lastDate = day;
        } else {
            if (day.getTime() > lastDate.getTime()) {
                lastDate = day;
            }
        }
    });

    console.log(lastDate.toLocaleDateString());
}

latestDate(logDates);