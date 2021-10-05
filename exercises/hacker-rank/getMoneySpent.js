function getMoneySpent(keyboards, drives, b) {
    let canSpend = [];
    for(let k of keyboards) {
        for(let d  of drives) {
            let cost = k + d;
            if(cost <= b) { canSpend.push(cost) }
        }
    }
    return canSpend.length > 0 ? Math.max(...canSpend) : -1;
}