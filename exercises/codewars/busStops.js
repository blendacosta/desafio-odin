const number = busStops => {
  return busStops.reduce(
    (remaining, [enter, leave]) => remaining + enter - leave,
    0
  );
};
