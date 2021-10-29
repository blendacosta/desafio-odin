var moveZeros = function (arr) {
  let zeros = arr.filter(v => v === 0);
  let result = arr.filter(v => v !== 0);
  result.push(...zeros);
  return result;
};
