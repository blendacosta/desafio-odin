function rowWeights(array) {
  let res = [0, 0];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    i % 2 === 0 ? (res[0] += array[i]) : (res[1] += array[i]);
  }
  return res;
}
