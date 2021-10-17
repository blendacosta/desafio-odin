function sortArray(array) {
  const odd = array.filter((value) => value % 2 !== 0).sort((a, b) => a - b);
  return array.map((value) => (value % 2 !== 0 ? odd.shift() : value));
}
