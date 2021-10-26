const longestConsec = (strarr, k) => {
  let result = '';
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return '';
  }
  let len = strarr.length;
  for (let i = 0; i < len; i++) {
    let str = strarr.slice(i, i + k).join('');
    if (str.length > result.length) {
      result = str;
    }
  }
  return result;
};
