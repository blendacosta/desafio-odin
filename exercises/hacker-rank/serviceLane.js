function serviceLane(width, cases) {
  let max = [];
  cases.forEach((el) => {
    max.push(Math.min(...width.slice(el[0], el[1] + 1)));
  });
  return max;
}
