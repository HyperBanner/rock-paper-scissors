let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt(
    "What do you pick? Rock, paper, or scissors?"
  ).toLowerCase();
  if (choice === "paper") {
    return "Paper";
  } else if (choice === "rock") {
    return "Rock";
  } else if (choice === "scissors") {
    return "Scissors";
  } else {
    alert("Invalid choice!");
    getHumanChoice();
  }
}

getHumanChoice();
