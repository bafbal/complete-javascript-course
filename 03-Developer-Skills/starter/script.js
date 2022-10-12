// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyy = 23;

// const birthYear = 2022;

// const age = birthYear => birthYear + 2;

// console.log(age(2022));
// debugger;

// console.log(xyy + 3);

const temps = [12, 5, -5, 0, 4];

printForecast(temps);

function printForecast(arr) {
  let resultString = '';
  for (let i = 0; i < arr.length; i++) {
    resultString = resultString + `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log(resultString);
}
