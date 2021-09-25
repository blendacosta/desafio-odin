function hurdleRace(k, height) {
    height.sort((a,b) => b - a);
    const biggestHurdle = height[0];
    if (k < biggestHurdle) {
        return biggestHurdle - k;
    } else 
        return 0;
}

console.log(hurdleRace(4, [2,5,2,1])) // => 1
console.log(hurdleRace(5, [2,5,2,1])) // => 0