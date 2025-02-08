"use strict";

const btn_rock = document.querySelector(".btn_rock");
const btn_paper = document.querySelector(".btn_paper");
const btn_scissors = document.querySelector(".btn_scissors");

let humanScore = 0;
let computerScore = 0;

btn_rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
btn_paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
btn_scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  let message = document.querySelector(".score_message");
  let human_score_display = document.querySelector(".player_score");
  let computer_score_display = document.querySelector(".computer_score");

  if (humanChoice === "rock" && computerChoice === "rock") {
    message.textContent = "It's a draw! Rock vs Rock";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    message.textContent = "You lose! Paper beats Rock.";
    computerScore++;
    computer_score_display.textContent = `${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    message.textContent = "You win! Rock beats Scissors";
    humanScore++;
    human_score_display.textContent = `${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    message.textContent = "You win! Paper beats Rock!";
    humanScore++;
    human_score_display.textContent = `${humanScore}`;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    message.textContent = "It's a draw! Paper vs Paper";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    message.textContent = "You lose! Scissors beat Paper.";
    computerScore++;
    computer_score_display.textContent = `${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    message.textContent = "You lose! Rock beats Paper.";
    computerScore++;
    computer_score_display.textContent = `${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    message.textContent = "You win! Scissors beat Paper.";
    humanScore++;
    human_score_display.textContent = `${humanScore}`;
  } else {
    message.textContent = "It's a draw! Scissors vs Scissors";
  }
}
