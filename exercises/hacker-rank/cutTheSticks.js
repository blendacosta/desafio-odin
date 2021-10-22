const cutTheSticks = arr => {
  let lengths = [];
  while (arr.length > 0) {
    lengths.push(arr.length);
    let min = Math.min(...arr);
    arr = arr.filter(v => v > min);
  }
  return lengths;
};
