// fonte: https://javascript.plainenglish.io/javascript-algorithm-migratory-birds-848ad6a99ac3

function migratoryBirds(arr) {
    let largest = 1;
    let counter = largest;
    let type = 0;
    arr.sort();
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        largest = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
        if (largest > counter) {
            counter = largest;
            type = arr[i];
        }
    } return type;
}
