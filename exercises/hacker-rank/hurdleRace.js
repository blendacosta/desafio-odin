function hurdleRace(k, height) {
    height.sort((a,b) => b - a);
    const biggestHurdle = height[0];
    return k < biggestHurdle? biggestHurdle - k : 0;
}

console.log(hurdleRace(4, [2,5,2,1])) // => 1
console.log(hurdleRace(5, [2,5,2,1])) // => 0