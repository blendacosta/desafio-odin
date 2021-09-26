function viralAdvertising(n) {
    let shared = 5;
    let liked = Math.floor(shared/2);
    let cumulative = liked;
    for (let i = 1; i < n; i++) {
        shared = liked*3;
        liked = Math.floor(shared/2);
        cumulative += liked;
    }
    return cumulative;
}

console.log(viralAdvertising(5)); // >> 24