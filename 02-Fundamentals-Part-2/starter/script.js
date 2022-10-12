'strict mode';

// function add(a, b) {
//     return a + b;
// }
// const a = Number(prompt("give me the first number to add"));
// const b = Number(prompt("give me the second number number to add"));

// console.log(add(a, b));

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const averageDolphins = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(23, 34, 27);

// const checkWinner2 = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
//     }
// }

// const checkWinner3 = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
//     }
// }

// checkWinner(averageDolphins, averageKoalas);
// checkWinner2(averageDolphins, averageKoalas);
// checkWinner3(averageDolphins, averageKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// console.log(calcTip(1000));

// const bills = new Array(125, 555, 44);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// console.log(bills, tips, total);


// function calcTip(bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// }

// const instructor = {
//     firstName: 'Jonas',
//     friends: ['Michael', 'Jurgen', 'Helmut']
// };

// console.log(`${instructor.firstName} has ${instructor.friends.length} friends, and his best friend is ${instructor.friends[0]}`);

// const user1 = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const user2 = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// if (user1.calcBMI() > user2.calcBMI()) {
//     console.log(`${user1.fullName}'s BMI (${user1.bmi}) is higher than ${user2.fullName}'s (${user2.bmi})!`);
// } else {
//     console.log(`${user2.fullName}'s BMI (${user2.bmi}) is higher than ${user1.fullName}'s (${user2.bmi})!`);
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));