/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    let days = [];
    for (let n = i; n <= j; n++) {
        days.push(n);
    }
    return isBeautifulDay(days, k);
}

const inverse = (n) => {
   return Number(n
        .toString()
        .split('')
        .reverse()
        .join(''));
};

const isBeautifulDay = (arr, k) => {
    let bDays = [];
    arr.forEach((d) => {
        let n;
        n = Math.abs(d - inverse(d))/k;
        if (Number.isInteger(n)) {
            bDays.push(n);
        }
    });
    return bDays.length;
};