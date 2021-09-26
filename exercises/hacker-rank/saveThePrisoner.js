function saveThePrisoner(n, m, s) {
    return (m - 1 + s)% n || n;
}

console.log(saveThePrisoner(3,7,3)) // >> 3
console.log(saveThePrisoner(7,19,2)) // >> 6