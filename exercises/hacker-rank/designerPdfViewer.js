function designerPdfViewer(h, word) {
    let max = -1;
    for (let l of word) {
        let position = (l.charCodeAt() - 97);
        if (max < h[position]) {
            max = h[position];
        }
    }
    return max * word.length;    
}

console.log(designerPdfViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 'abc')); // >> 9
