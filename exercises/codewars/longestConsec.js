const longestConsec = (strarr, k) => {
  let result = '';
  let len = strarr.length;
  if (len == 0 || k > len || k <= 0) {
    return result;
  }
  for (let i = 0; i < len; i++) {
    let str = strarr.slice(i, i + k).join('');
    if (str.length > result.length) {
      result = str;
    }
  }
  return result;
};
