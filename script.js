'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive!`);

// function logger() {
//     console.log(`My name is Ahmed`);
// }
// // calling, running, invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function 
// function calcAge1(birthYear) {
//     return 2037 - birthYear;

// }

// const age = calcAge1(1988);

// //function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1995);
// console.log(age, age2)

// const calcAge3 = birthYear => 2037 - birthYear;
// const age = calcAge3(1988);
// console.log(age);

// const yearsUntilRetirment = (birthYear, fristName) => {
//     const age = 2022 - birthYear;
//     const retirment = 65 - age;
//     return `${fristName}, going to retires in ${retirment} years!`;
// }
// let yearsUntil = yearsUntilRetirment(1988, `Ahmed`);
// console.log(yearsUntil);

// function cutFruitsPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitsPieces(apples);
//     const orangePieces = cutFruitsPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}  pieces of orange`;
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirment = (birthYear, fristName) => {
//     const age = calcAge(birthYear);
//     const retirment = 65 - age;
//     const statement = retirment > 0 ? `${fristName}, will retire after ${retirment} years!` : `${fristName}, already retired 🎉!`
//     console.log(statement);
// }
// yearsUntilRetirment(1995, `Atyaf`);
// yearsUntilRetirment(1988, `Ahmed`);

// const calcAvarage = (value1, value2, value3) => (value1 + value2 + value3) / 3;

// const aveDolphins = calcAvarage(85, 54, 41);
// const aveKoalas = calcAvarage(23, 34, 27);

// const checkWinner = function (aveDolphins, aveKoalas) {
//     if (aveDolphins >= aveKoalas * 2) {
//         return `Dolphins wins ${aveDolphins} vs ${aveKoalas}`
//     } else if (aveKoalas >= aveDolphins * 2) {
//         return `Koalas wins ${aveKoalas} vs ${aveKoalas}`
//     } else {
//         return -1;
//     }
// }

// const winner = checkWinner(aveDolphins, aveKoalas);
// console.log(winner);

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = [`Micheal`, `Steven`, `Peter`];
// console.log(friends);

// const years = new Array(1991, 1988, 1995, 1954);
// console.log(years);

// console.log(friends[0, 1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = `Moh`;
// console.log(friends); // changing the array
// let birthYear = 1988;
// const ahmed = [`Ahmed`, `Hussein`, 2022 - birthYear, friends];
// // console.log(ahmed);
// // console.log(ahmed[ahmed.length - 1]);

// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const newYears = [];
// for (let i = 0; i < years.length; i++) {
//     const x = calcAge(years[i]);
//     newYears.push(x);
// }
// console.log(newYears);

const friends = [`Micheal`, `Steven`, `Peter`];
friends.push(`Ahmed`); // add to the end of the array 
console.log(friends);

friends.unshift("Ali"); //it will add element to the beggining of the array 
console.log(friends);
friends.pop(); // it will delete the last emlement from the array and we don't pass any argument to it, because it will delete always the last elemnt. 
console.log(friends);
friends.shift(); // it will remove the first element from the array 
console.log(friends);
console.log(friends.indexOf('Micheal'));
console.log(friends.indexOf('Moh'));
console.log(friends.includes('Ahmed')); // it will return boolean value as true or false, it will use strict equallity operator ===. 


const tipCalc = bill => {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];

//first approach
const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
// console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);

//second opproach using for loop 
const tip1 = [];

for (let i = 0; i < bills.length; i++) {
    tip1.push(tipCalc(bills[i]));
}
const total1 = [];
for (let i = 0; i < bills.length; i++) {
    total1.push(bills[i] + tip1[i]);
}

console.log(tip1);
console.log(total1);