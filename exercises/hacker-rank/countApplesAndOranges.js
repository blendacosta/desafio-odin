function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const contApple = apples.map((apple) => apple + a).filter(l => l >= s && l <= t).length;
    const contOrange = oranges.map((orange) => orange + b).filter(l => l >=s && l <=t).length;

    console.log(contApple);
    console.log(contOrange);
}