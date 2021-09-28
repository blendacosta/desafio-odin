function miniMaxSum(arr) {
    const sum = (total, value) => {
        return total+=value;
    }
    arr.sort((a,b) => a - b);
    const len = arr.length;
    let min = arr.slice(0, len-1);
    let max = arr.slice(1, len);
    return console.log(min.reduce(sum) + " " + max.reduce(sum));
}