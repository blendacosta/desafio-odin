function countingValleys(steps, path) {
    let level = 0;
    let valleys = 0;

    for (let s of path) {
        switch (s) {
            case 'U':
                level++;
                break;
            case 'D':
                if (level == 0) {
                    valleys++;
                }
                level--;
                break;
        }
    }
    return valleys;
}
console.log(countingValleys(8, "UDDDUDUU")) // => 1