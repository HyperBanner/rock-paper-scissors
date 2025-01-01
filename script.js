"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = String(prompt("Choose: Rock, Paper, Scissors")).toLowerCase();

  if (choice === "null" || choice === "") {
    alert("Please type in a valid option.");
    getHumanChoice();
  } else if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    alert("Please type in a valid option.");
    getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("It's a draw! Rock vs Rock");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It's a draw! Paper vs Paper");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat Paper.");
    humanScore++;
  } else {
    console.log("It's a draw! Scissors vs Scissors");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
