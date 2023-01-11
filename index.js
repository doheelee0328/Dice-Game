// variables for selecting the elements
const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const image = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  score = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};
let score, activePlayer, playing, scores;

const init = () => {
  score = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  score1.textContent = "0";
  score2.textContent = "0";
  currentScore1.textContent = "0";
  currentScore2.textContent = "0";
  image.classList.add("hidden");

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  document.getElementById(`name--${activePlayer}`).textContent = "Player 1";
};

init();

// addevent listener

buttonRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

// adding current score

buttonHold.addEventListener("click", function () {
  if (playing) {
    // 1. add the current score of active player's score
    scores[activePlayer] += score;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      playing = false;
      image.classList.add("hidden");
      document.getElementById(`name--${activePlayer}`).textContent = "Winner!";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch to another player
      switchPlayer();
    }
  }
});

// reset the game
buttonNew.addEventListener("click", init);
