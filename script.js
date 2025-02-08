"use strict";

const main = document.querySelector(".main");
const buttons = document.querySelector(".buttons");
const btnRock = document.querySelector(".btn_rock");
const btnPaper = document.querySelector(".btn_paper");
const btnScissors = document.querySelector(".btn_scissors");
const scoreDiv = document.querySelector(".score")

let humanScore = 0;
let computerScore = 0;
let message = document.querySelector(".score_message");

btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  checkResults();
});
btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  checkResults();
});
btnScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  checkResults();
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  let humanScoreDisplay = document.querySelector(".player_score");
  let computerScoreDisplay = document.querySelector(".computer_score");

  if (humanChoice === "rock" && computerChoice === "rock") {
    message.textContent = "It's a draw! Rock vs Rock";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    message.textContent = "You lose! Paper beats Rock.";
    computerScore++;
    computerScoreDisplay.textContent = `${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    message.textContent = "You win! Rock beats Scissors";
    humanScore++;
    humanScoreDisplay.textContent = `${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    message.textContent = "You win! Paper beats Rock!";
    humanScore++;
    humanScoreDisplay.textContent = `${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    message.textContent = "It's a draw! Paper vs Paper";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    message.textContent = "You lose! Scissors beat Paper.";
    computerScore++;
    computerScoreDisplay.textContent = `${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    message.textContent = "You lose! Rock beats Paper.";
    computerScore++;
    computerScoreDisplay.textContent = `${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    message.textContent = "You win! Scissors beat Paper.";
    humanScore++;
    humanScoreDisplay.textContent = `${humanScore}`;
  } else {
    message.textContent = "It's a draw! Scissors vs Scissors";
  }
}

function checkResults() {
  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  main.removeChild(buttons);
  let endMessage = document.querySelector(".end_message");
  if (humanScore > computerScore) {
    endMessage.textContent = "You won the game!";
    scoreDiv.removeChild(message);
  } else {
    endMessage.textContent = "You lost the game!";
    scoreDiv.removeChild(message);
  }
}
