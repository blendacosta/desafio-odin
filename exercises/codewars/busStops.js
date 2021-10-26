var number = function (busStops) {
  let p = 0;
  for (let stop of busStops) {
    p += stop[0];
    p -= stop[1];
  }
  return p;
};
