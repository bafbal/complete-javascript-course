'use strict';

let guess = generateGuess();
let highScore = 0;
const maxScore = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', resetGame);

let score = Number(document.querySelector('.score').textContent);

function check() {
  let userGuess = document.querySelector('.guess').value;
  if (userGuess) {
    userGuess = Number(userGuess);
    if (Number(userGuess) === guess) {
      setTextContentInClass('Eltaláltad! ✨', 'message');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      setTextContentInClass(guess, 'number');
      setTextContentInClass(getMedalString(), 'medals');
      document.querySelector('.check').removeEventListener('click', check);
      if (score > highScore) {
        highScore = score;
        setTextContentInClass(highScore, 'highscore');
      }
    } else if (score > 1) {
      decrementDisplayedScore();
      setTextContentInClass(
        userGuess > guess ? 'Kevesebbre gondoltam!' : 'Többre gondoltam!',
        'message'
      );
    } else {
      setTextContentInClass('Vesztettél! 💥💥💥', 'message');
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  } else {
    setTextContentInClass('Nem írtál be számot!', 'message');
  }
}

function setTextContentInClass(text, classToSet) {
  document.querySelector(`.${classToSet}`).textContent = text;
}

function decrementDisplayedScore() {
  score--;
  document.querySelector('.score').textContent = score;
}

function resetGame() {
  document.querySelector('.score').textContent = score = maxScore;
  guess = generateGuess();
  document.querySelector('.message').textContent = 'Tippelj egyet!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').addEventListener('click', check);
}

function generateGuess() {
  return Math.trunc(Math.random() * 20) + 1;
}

function getMedalString() {
  return document.querySelector('.medals').textContent + '🥇';
}
