const workbook = (n, k, arr) => {
  let page = 1;
  let result = 0;

  for (problems of arr) {
    for (let i = 1; i <= problems; i++) {
      if (i == page) {
        result++;
      }
      if (i % k === 0 || i == problems) {
        page++;
      }
    }
  }
  return result;
};
