function sockMerchant(n, ar) {
    let colors = {};
    let pairs = 0;
    ar.forEach((sock) => {
        if( !(colors[sock])) {
            colors[sock] = 0;
        }
        colors[sock]++;
        if (colors[sock] % 2 === 0){
            pairs++;
        }
    })
    return pairs;
}

ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(9, ar)) // -> 3