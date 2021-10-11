function pickingNumbers(a) {
    let biggest = 0;
    for (let el of a) {
        const subArr = a.filter(next => next - el === 0 || next - el === 1);
        let len = subArr.length;
        if (len > biggest) {
            biggest = len;
        }
    }
    return biggest;
}