'use strict';
'';
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const dispCurrentScorePlayer1 = document.getElementById(`current--0`);
const dispCurrentScorePlayer2 = document.getElementById(`current--1`);
const dispTotalScorePlayer1 = document.getElementById(`score--0`);
const dispTotalScorePlayer2 = document.getElementById(`score--1`);

let playerOnTheMove = 0;
let lastRolledNumber = 5;
let currentScore = 0;
let totalScore = [0, 0];
let gameIsOver = false;
const scoreNeededToWin = 20;

const rollDice = function () {
  if (!gameIsOver) {
    dice.classList.remove('hidden');
    lastRolledNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${lastRolledNumber}.png`;
    if (lastRolledNumber === 1) {
      setCurrentScore(0);
      turnPlayer();
    } else {
      setCurrentScore(currentScore + lastRolledNumber);
    }
  }
};

btnRollDice.addEventListener('click', rollDice);

const holdScore = function () {
  if (!gameIsOver) {
    setTotalScore(totalScore[playerOnTheMove] + currentScore);
    if (totalScore[0] > scoreNeededToWin || totalScore[1] > scoreNeededToWin) {
      gameIsOver = true;
      dice.classList.add('hidden');
      totalScore[0] > totalScore[1] ? highLightWinner(0) : highLightWinner(1);
    } else {
      setCurrentScore(0);
      turnPlayer();
    }
  }
};

btnHold.addEventListener('click', holdScore);

const setCurrentScore = function (newScore) {
  currentScore = newScore;
  playerOnTheMove === 0
    ? (dispCurrentScorePlayer1.textContent = currentScore)
    : (dispCurrentScorePlayer2.textContent = currentScore);
};

const setTotalScore = function (newScore) {
  totalScore[playerOnTheMove] = newScore;
  playerOnTheMove === 0
    ? (dispTotalScorePlayer1.textContent = totalScore[playerOnTheMove])
    : (dispTotalScorePlayer2.textContent = totalScore[playerOnTheMove]);
};

const turnPlayer = function () {
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.player--0').classList.toggle('player--active');
  playerOnTheMove === 0 ? (playerOnTheMove = 1) : (playerOnTheMove = 0);
};

const startNewGame = function () {
  setCurrentScore(0);
  setTotalScore(0);
  turnPlayer();
  setCurrentScore(0);
  setTotalScore(0);
  playerOnTheMove = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  gameIsOver = false;
  dice.classList.add('hidden');
};

startNewGame();
btnNewGame.addEventListener('click', startNewGame);

function highLightWinner(player) {
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--active');
  document.querySelector(`.player--${player}`).classList.add('player--winner');
}
