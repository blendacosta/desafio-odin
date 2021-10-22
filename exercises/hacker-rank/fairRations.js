const fairRations = B => {
  let loaves = 0;
  if (B.filter(v => v % 2 === 1).length % 2 === 1) {
    return 'NO';
  } else {
    B.forEach((v, i) => {
      if (v % 2 === 1) {
        B[i]++;
        B[i + 1]++;
        loaves += 2;
      }
    });
  }
  return loaves;
};
