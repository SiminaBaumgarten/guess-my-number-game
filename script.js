"use strict";

const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const numEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const guessEl = document.querySelector(".guess");
const message = document.querySelector(".message");

const generateSecretNr = function () {
  return Math.floor(Math.random() * (20 - 1) + 1) + 1;
};
let randomNr = generateSecretNr();

let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  message.textContent = msg;
};

const changeBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

const changeNumEl = function (txtCont, width) {
  numEl.textContent = txtCont;
  numEl.style.width = width;
};

const displayScore = function (num) {
  scoreEl.textContent = num;
};

const displayHighscore = function (num) {
  highscoreEl.textContent = num;
};

checkBtn.addEventListener("click", function () {
  let guess = Number(guessEl.value);
  if (!guess) {
    displayMessage("⛔ No number");
  } else if (guess === randomNr) {
    displayMessage("🍾 Correct Number!");
    changeNumEl(randomNr, "30rem");
    changeBackgroundColor("#60b347");

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess !== randomNr) {
    if (score > 1) {
      displayMessage(guess > randomNr ? "☝🏻 Too high!" : "👇🏻 Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game!");
      displayScore(0);
    }
  }
});

againBtn.addEventListener("click", function () {
  randomNr = generateSecretNr();
  score = 20;
  displayScore(score);
  displayMessage("Start guessing...");
  guessEl.value = "";
  changeBackgroundColor("#222");
  changeNumEl("?", "15rem");
});
