function breakingRecords(scores) {
    let [highest_score, lowest_score] = [scores[0], scores[0]];
    let [best, worst] = [0, 0];
    for (let s of scores) {
        if (s > highest_score) {
            highest_score = s;
            best++;
        }
        if (s < lowest_score) {
            lowest_score = s;
            worst++;
        }
    }
    return [best, worst];
}