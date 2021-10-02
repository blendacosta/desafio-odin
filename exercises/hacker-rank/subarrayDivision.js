function birthday(s, d, m) {
    let cont = 0;
    let result = 0;

    for (const _num of s) {
        let temp = s.slice(cont, cont+m);
        cont++;
        if (temp.reduce((total,n) => total+=n) == d) {
            result++;
        }
    }
    return result;
}