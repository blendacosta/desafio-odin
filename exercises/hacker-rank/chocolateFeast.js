const chocolateFeast = (n, c, m) => {
  let canBuy = Math.floor(n / c); // 3
  return canBuy + Math.ceil(canBuy / (m - 1) - 1);
};