'use strict';

const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const dispCurrentScorePlayer1 = document.getElementById('current--0');
const dispCurrentScorePlayer2 = document.getElementById('current--1');
const dispTotalScorePlayer1 = document.getElementById('score--0');
const dispTotalScorePlayer2 = document.getElementById('score--1');

let lastRolledNumber = 5;
let player1Turn = true;
let totalScorePlayer1 = 0;
let currentScorePlayer1 = 0;
let totalScorePlayer2 = 0;
let currentScorePlayer2 = 0;
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
      setCurrentScore(
        (player1Turn ? currentScorePlayer1 : currentScorePlayer2) +
          lastRolledNumber
      );
    }
  }
};

btnRollDice.addEventListener('click', rollDice);

const holdScore = function () {
  if (!gameIsOver) {
    setTotalScore(
      (player1Turn ? totalScorePlayer1 : totalScorePlayer2) +
        (player1Turn ? currentScorePlayer1 : currentScorePlayer2)
    );
    if (
      totalScorePlayer1 > scoreNeededToWin ||
      totalScorePlayer2 > scoreNeededToWin
    ) {
      gameIsOver = true;
      dice.classList.add('hidden');
      totalScorePlayer1 > scoreNeededToWin
        ? highLightWinner(0)
        : highLightWinner(1);
    } else {
      setCurrentScore(0);
      turnPlayer();
    }
  }
};

btnHold.addEventListener('click', holdScore);

const setCurrentScore = function (newScore) {
  player1Turn
    ? (dispCurrentScorePlayer1.textContent = currentScorePlayer1 = newScore)
    : (dispCurrentScorePlayer2.textContent = currentScorePlayer2 = newScore);
};

const setTotalScore = function (newScore) {
  player1Turn
    ? (dispTotalScorePlayer1.textContent = totalScorePlayer1 = newScore)
    : (dispTotalScorePlayer2.textContent = totalScorePlayer2 = newScore);
};

const turnPlayer = function () {
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.player--0').classList.toggle('player--active');
  player1Turn = !player1Turn;
};

const startNewGame = function () {
  setCurrentScore(0);
  setTotalScore(0);
  turnPlayer();
  setCurrentScore(0);
  setTotalScore(0);
  player1Turn = true;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  gameIsOver = false;
};

startNewGame();
btnNewGame.addEventListener('click', startNewGame);

function highLightWinner(player) {
  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--active');
  document.querySelector(`.player--${player}`).classList.add('player--winner');
}
