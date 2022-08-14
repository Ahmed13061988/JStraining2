const ahmed = {
    firstName: `Ahmed`,
    lastName: `Hussein`,
    age: 2022 - 1988,
    job: `Web Developer`,
    friends: [`Wael`, `Ahmed`, `Ayman`]
}
// the order of values not matter at all when we need to retrive them.
//console.log(ahmed);
//console.log(ahmed.firstName); // dot notation calling 
//console.log(ahmed[`lastName`]); // bracket notation calling
const nameKey = `Name`;
//console.log(ahmed[`first` + nameKey]);
//console.log(ahmed[`last` + nameKey]); // example how we can pass an expression to the squar brackets 
// const intrestedIn = prompt(`What do you want to know about Ahmed? choose among first name, last name, age, job and friends`);
// console.log(ahmed[intrestedIn] ? ahmed[intrestedIn] : `Incorrect input!!`);

ahmed.location = `Denver`;
ahmed[`facebook`] = `AhmedAliHussein`;

const challenge = `${ahmed.firstName} has ${ahmed.friends.length} friends, and the best friend is called ${ahmed.friends[0]}`;

// adding a function as an element to the object.
const ahmed1 = {
    firstName: `Ahmed`,
    lastName: `Hussein`,
    birthYear: 1988,
    job: `Web Developer`,
    friends: [`Wael`, `Ahmed`, `Ayman`],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2022 - birthYear;
    }
}
console.log(ahmed1.calcAge(1988));
console.log(ahmed1[`calcAge`](1988)); //brackets calling for the element.




