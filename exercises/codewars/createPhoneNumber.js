function createPhoneNumber(numbers) {
  let ans = "(";
  for (let i = 0; i < numbers.length; i++) {
    if (i === 3) {
      ans += ") ";
    }
    if (i === 6) {
      ans += "-";
    }
    ans += "" + numbers[i];
  }
  return ans;
}
