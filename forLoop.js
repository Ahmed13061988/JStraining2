//for loop will executed while the condition is true
for (let rep = 1; rep <= 10; rep++) {
    //console.log(`Number of the repeating: ${rep} `);
}

const ahmed = [`Ahmed`, `Hussein`, 2022 - 1988, `Web Developer`, [`Wael`, `Ahmed`, `Hassan`]];
const types = [];
for (let i = 0; i < ahmed.length; i++) {
    types.push(typeof ahmed[i]);
    //  console.log(ahmed[i], typeof ahmed[i]);

}
//console.log(types);

const years = [1988, 2007, 1969, 1954];

const ages = [];
for (let i = 0; i < years.length; i++) {

    ages.push(2022 - years[i]);
}
//console.log(ages);
// console.log(`----ONLY STRINGS----`)
// for (let i = 0; i < ahmed.length; i++) {
//     if (typeof ahmed[i] !== `string`) continue;
//     console.log(ahmed[i], typeof ahmed[i]);
// }
// console.log(`----BREAK WITH NUMBERS----`)
// for (let i = 0; i < ahmed.length; i++) {
//     if (typeof ahmed[i] === 'number') break;
//     console.log(ahmed[i]);
// }

for (let i = ahmed.length - 1; i >= 0; i--) {
    console.log(ahmed[i]);
}
