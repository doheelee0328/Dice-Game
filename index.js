// variables for selecting the elements
const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const image = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const scores = [0, 0];
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
let score = 0;
let activePlayer = 0;

score1.textContent = "0";
score2.textContent = "0";
image.classList.add("hidden");

// addevent listener

buttonRoll.addEventListener("click", function () {
  // Generating random dice numbers
  const random = Math.trunc(Math.random() * 6) + 1;
  image.classList.remove("hidden");
  // Display dice
  image.src = `./images/dice-${random}.png`;
  // check for rolled 1
  if (random !== 1) {
    score += random;
    document.getElementById(`current--${activePlayer}`).textContent = score;
  } else {
    // switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // this changes the value
    activePlayer = activePlayer === 0 ? 1 : 0;
    score = 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
  }
});
