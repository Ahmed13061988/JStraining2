const ahmed = {
    firstName: `Ahmed`,
    lastName: `Hussein`,
    age: 2022 - 1988,
    job: `Web Developer`,
    friends: [`Wael`, `Ahmed`, `Ayman`]
}
// the order of values not matter at all when we need to retrive them.
//console.log(ahmed);
ahmed.firstName; // dot notation calling 
ahmed[`lastName`]; // bracket notation calling
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
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }
    // calcAge: function () {
    //     console.log(this) // this keyword will refer to the object itself
    //     return 2022 - this.birthYear;
    // }
    calcAge: function () {
        //console.log(this) // this keyword will refer to the object itself
        this.age = 2022 - this.birthYear // here the this will point to the ahmed1 itself
        return this.age;
    }
}
// console.log(ahmed1.calcAge(ahmed1.birthYear));
// console.log(ahmed1[`calcAge`](ahmed1[`birthYear`])); //brackets calling for the element.

//another way to call the function from the object 
// console.log(ahmed1.calcAge());

// console.log(ahmed1.age);
// console.log(ahmed1.age);
// console.log(ahmed1.age);


const challenge1 = ahmed1.hasDriversLicense ? `${ahmed1.firstName} is a ${ahmed1.calcAge()}-years old ${ahmed1.job}, and he has a driver's license` : `${ahmed1.firstName} is a ${ahmed1.calcAge()}-years old ${ahmed1.job}, and he has no driver's license`
console.log(challenge1);

// if (ahmed1.hasDriversLicense) {
//     console.log(challenge1 + `, and he has a driver's license`);
// } else {

//     console.log(challenge1 + `, and he don't has a driver's license`);
// }






