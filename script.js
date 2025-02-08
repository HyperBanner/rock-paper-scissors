"use strict";

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

function playGame(number) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("It's a draw! Rock vs Rock");
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      humanScore++;
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock!");
      humanScore++;
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("It's a draw! Paper vs Paper");
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beat Paper.");
      computerScore++;
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Paper.");
      computerScore++;
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beat Paper.");
      humanScore++;
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    } else {
      console.log("It's a draw! Scissors vs Scissors");
      console.log(`Scores: You: ${humanScore} Computer: ${computerScore}`);
    }
  }

  if (humanScore > computerScore) {
    console.log("You won!");
    console.log(`Final Scores: You: ${humanScore} Computer: ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log("You lost!");
    console.log(`Final Scores: You: ${humanScore} Computer: ${computerScore}`);
  } else {
    console.log("Nobody wins!");
    console.log(`Final Scores: You: ${humanScore} Computer: ${computerScore}`);
  }
}
