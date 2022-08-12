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

function cutFruitsPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitsPieces(apples);
    const orangePieces = cutFruitsPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}  pieces of orange`;
    return juice;
};
console.log(fruitProcessor(2, 3));