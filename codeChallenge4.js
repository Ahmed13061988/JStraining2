const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTips = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

for (let i = 0; i < bills.length; i++) {

    tips.push(calcTips(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);