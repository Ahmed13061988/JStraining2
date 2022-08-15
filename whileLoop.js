for (let rep = 1; rep <= 10; rep++) {
    //console.log(`Number of the repeating: ${rep} `);
}

let rep = 1;
while (rep <= 10) {
    //console.log(`Number of the repeating: ${rep} from While loop  `);
    rep++
}

let dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice)

while (dice !== 6) {
    console.log(` You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) console.log(`The loop is over`);
}
