//for loop will executed while the condition is true
for (let rep = 1; rep <= 10; rep++) {
    //console.log(`Number of the repeating: ${rep} `);
}

const ahmed = [`Ahmed`, `Hussein`, 2022 - 1988, `Web Developer`, [`Wael`, `Ahmed`, `Hassan`]];
const types = [];
for (let i = 0; i < ahmed.length; i++) {
    types.push(typeof ahmed[i]);
    console.log(ahmed[i], typeof ahmed[i]);

}
console.log(types);