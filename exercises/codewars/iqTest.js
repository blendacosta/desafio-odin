function iqTest(numbers) {
  numbers = numbers.split(" ").map((n) => Number(n));
  let odd = numbers.filter((n) => !(n % 2 === 0));
  let even = numbers.filter((n) => n % 2 === 0);
  return odd.length < even.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1;
}
