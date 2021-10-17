function XO(str) {
  let x = (str.match(/x/gi) || []).length;
  let o = (str.match(/o/gi) || []).length;
  return x === o ? true : false;
}
