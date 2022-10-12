// let country = 'Hungary';
// let continent = 'Europe';
// let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);

// const weightOfMark = 78;
// const heightOfMark = 1.69;
// const weightOfJohn = 92;
// const heightOfJohn = 1.95;

// const bmiOfMark = weightOfMark / heightOfMark ** 2;
// const bmiOfJohn = weightOfJohn / heightOfJohn ** 2;

// const markHigherBMI = bmiOfMark > bmiOfJohn;

// // console.log(bmiOfMark, bmiOfJohn, markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${bmiOfMark}) is higher than John's (${bmiOfJohn})!`);
// } else {
//     console.log(`John's BMI (${bmiOfJohn}) is higher than Mark's! (${bmiOfMark})`);
// }

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log(`Dolphins won`);
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//     console.log(`Koalas won`);
// } else if (dolphinsScore === koalasScore && dolphinsScore > 100 && koalasScore > 100) {
//     console.log(`Match is draw`);
// } else {
//     console.log(`No team won the trophy`)
// }

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`);