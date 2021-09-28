function birthdayCakeCandles(candles) {
    let cont = 0;
    const max = candles.reduce(function(a, b) {
        return Math.max(a, b);
    });
    for(let i of candles) {
        if(i === max) {
            cont++;
        }
    }
    return cont;
}