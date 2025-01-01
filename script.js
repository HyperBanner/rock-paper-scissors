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
getHumanChoice();
