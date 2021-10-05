function catAndMouse(x, y, z) {
    let distA = Math.abs(x - z);
    let distB = Math.abs(y -z);

    if (distA !== distB) {
        return distA < distB ? 'Cat A' : 'Cat B';
    } else {
        return 'Mouse C';
    }
}