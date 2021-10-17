function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  for (let customer of customers) {
    let fastest = tills.indexOf(Math.min(...tills));
    tills[fastest] += customer;
  }
  return Math.max(...tills);
}
