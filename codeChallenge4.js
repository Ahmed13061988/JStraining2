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
let sum = 0;

const calcAvarage = function (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
    return sum / newArray.length;
}

arr = [2, 3, 7, 'hello'];
console.log(calcAvarage(arr)); 