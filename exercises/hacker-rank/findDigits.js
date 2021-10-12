function findDigits(n) {
    let d = Array.from(String(n), Number);
    d = d.filter(d => n%d === 0);
    return d.length;
}