const pages = [0];
for (let i = 1; i <= n; i++) {
    pages.push(i);
}
let count = 0;
if (p === 1) {
    count = 0;
} else if (p < pages.length/2) {
    count = Math.floor(pages.indexOf(p)/2);
}  else {
    count = Math.floor(pages.reverse().indexOf(p)/2);
    if(pages.length%2 !== 0) {
        count = 1;
    }
}
console.log(pageCount(5,4))
console.log(pageCount(6,5)) // error, expect => 1