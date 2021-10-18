function extraLongFactorials(n) {
  n = BigInt(n);
  let acc = BigInt(1);
  for (let i = n; i > 0; i--) {
    acc *= i;
  }
  console.log(acc.toString());
}
