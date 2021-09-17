function bonAppetit(bill, k, b) {
    let billAnna = bill.slice();
    billAnna.splice(k,1);
    const sum = (total, value) => {
        return total+=value;
    }
    const splitBillTotal = bill.reduce(sum)/2;
    const splitBillAnna = billAnna.reduce(sum)/2;
    if (splitBillAnna === b) {
        console.log('Bon Appetit');
    } else {
        return console.log(splitBillTotal - splitBillAnna);
    }
}