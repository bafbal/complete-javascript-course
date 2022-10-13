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

const rollDice = function () {
  lastRolledNumber = Math.trunc(Math.random() * 5) + 1;
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
};

btnRollDice.addEventListener('click', rollDice);

const startNewGame = function () {
  setCurrentScore(0);
  setTotalScore(0);
  turnPlayer();
  setCurrentScore(0);
  setTotalScore(0);
  player1Turn = true;
};

btnNewGame.addEventListener('click', startNewGame);

const holdScore = function () {
  setTotalScore(
    (player1Turn ? totalScorePlayer1 : totalScorePlayer2) +
      (player1Turn ? currentScorePlayer1 : currentScorePlayer2)
  );
  setCurrentScore(0);
  turnPlayer();
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
  player1Turn = !player1Turn;
};
