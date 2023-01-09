// variables for selecting the elements
const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const image = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
let score = 0;

score1.textContent = "0";
score2.textContent = "0";
image.classList.add("hidden");

buttonRoll.addEventListener("click", function () {
  const random = Math.trunc(Math.random() * 6) + 1;
  image.classList.remove("hidden");
  image.src = `./images/dice-${random}.png`;
  if (random !== 1) {
    score += random;
    currentScore1.textContent = score;
  } else {
  }
});
