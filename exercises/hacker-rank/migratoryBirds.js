function migratoryBirds(arr) {
    let birds = {};
    for (let type of arr) {
        if (!(birds[type])) {
            birds[type] = 0;
        }
        birds[type]++;
    }
    const elements = Object.entries(birds);
    const sorted = elements.sort((a, b) => b[1] - a[1]);

    return sorted[0][0];
}

migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])
// migratoryBirds([1,4,4,4,5,3])