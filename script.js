"use strict";

// import "nes.css/css/nes.min.css";

let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let secretNumber = Math.floor(Math.random() * (20 - 1 + 1) + 1);
let again = document.querySelector(".again");

console.log(guess);
console.log(check);
console.log(number);
console.log(message);
console.log(score);
console.log(highscore);

let scoreValue = 20;
let highscoreValue = 0;

check.addEventListener("click", function () {
  if (
    guess.value !== "" &&
    Number(guess.value) > 0 &&
    Number(guess.value) < 21
  ) {
    console.log(guess.value);
    if (Number(guess.value) === secretNumber) {
      message.textContent = "🎉 You win!";
      if (scoreValue > highscoreValue) {
        highscore.textContent = scoreValue;
      }
      number.textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#9CCC65";
      document.querySelector(".header-title").textContent =
        "🎉 YOU GUESSED THE NUMBER 🎉";
    } else if (guess.value !== secretNumber) {
      message.textContent = guess.value > secretNumber ? "Too high" : "Too low";
      scoreValue--;
      score.textContent = scoreValue;
    }
  }
});

again.addEventListener("click", function () {});
