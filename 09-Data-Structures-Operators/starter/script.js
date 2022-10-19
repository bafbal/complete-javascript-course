'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);

// const allplayer = [...players1, ...players2];

// console.log(allplayer);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(players1Final);

// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1);
// console.log(team2);
// console.log(draw);

// function printGoals(...players) {
//   console.log(...players);
//   console.log(players.length);
// }

// printGoals(...game.scored);

// team1 < team2 && console.log(`Team1 is more likely to win`);
// team1 > team2 && console.log(`Team2 is more likely to win`);

// const menu = ['pizza', 'soup'];
// for (const item of menu) {
//   console.log(item);
// }

// const cica = {
//   whiskers: true,
//   legs: true,
//   gills: false,
// };

// console.log(Object.entries(cica));

// for (const [number, scorer] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(number) + 1}: ${scorer}`);
// }

// let sum = 0;
// let odds = Object.values(game.odds);
// for (const odd of odds) {
//   sum += odd;
// }
// console.log(sum / odds.length);

// odds = Object.entries(game.odds);
// for (const odd of odds) {
//   game[odd[0]] && console.log(`Odd of victory ${game[odd[0]]}: ${odd[1]}`);
//   odd[0] === 'x' && console.log(`Odd of draw: ${odd[1]}`);
// }

// console.log('');

// for (const [team, odd] of odds) {
//   const teamString = team === 'x' ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamString}: ${odd}`);
// }

// const scorers = {};
// for (const scorer of game.scored) {
//   scorers[scorer] ? (scorers[scorer] += 1) : (scorers[scorer] = 1);
// }

// console.log(scorers);

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// console.log(...gameEvents.values());

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [key, value] of gameEvents.entries()) {
//   console.log(`[${key < 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`);
// }

// console.log('cica cica'.replaceAll('cica', 'hal'));

const checkIfUpperCase = function (stringToBeChecked) {
  return stringToBeChecked === stringToBeChecked.toUpperCase();
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const inputString = document.querySelector('textarea').value;
  const lines = inputString.split('\n');
  let positionOfUnderScore;
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();
    positionOfUnderScore = lines[i].indexOf('_');
    lines[i] = lines[i].replace('_', '');
    lines[i] =
      lines[i].slice(0, positionOfUnderScore) +
      lines[i]
        .slice(positionOfUnderScore)
        .replace(
          lines[i][positionOfUnderScore],
          lines[i][positionOfUnderScore].toUpperCase()
        );
    lines[i] = lines[i].replace(lines[i][0], lines[i][0].toLowerCase());
    for (let j = lines[i].length - 1; j > 0; j--) {
      if (checkIfUpperCase(lines[i][j]) && checkIfUpperCase(lines[i][j - 1])) {
        if (j === lines[i].length - 1) {
          lines[i] = lines[i].slice(0, j) + lines[i][j].toLowerCase();
        } else {
          lines[i] =
            lines[i].slice(0, j) +
            lines[i][j].toLowerCase() +
            lines[i].slice(j + 1);
        }
      }
    }
    lines[i] = lines[i].padEnd(25, ' ');
    for (let j = 0; j < i + 1; j++) {
      lines[i] = lines[i] + '✔';
    }
    console.log(lines[i]);
  }
});

console.log();
