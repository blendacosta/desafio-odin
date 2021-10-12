function utopianTree(n) {
    let heigth = 0;
    let spring = false;
    for (let i = 0; i <= n; i++) {
        if (spring) {
            heigth = 2 * heigth;
            spring = false;
        } else {
            heigth++;
            spring = true;
        }
    }
    return heigth;
}