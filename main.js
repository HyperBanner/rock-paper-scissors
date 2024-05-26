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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Rock") {
    alert("Computer chose Rock. It's a draw!");
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    alert("Computer chose Paper. Paper beats Rock, computer wins!");
    computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    alert("Computer chose Scissors. Rock beats Scissors, human wins!");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    alert("Computer chose Rock. Paper beats rock, human wins!");
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    alert("Computer chose Paper. It's a draw!");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    alert("Computer chose Scissors. Scissors beats Paper, computer wins!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    alert("Computer chose Rock. Rock beats Scissors, computer wins!");
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    alert("Computer chose Paper. Scissors beats Paper, human wins!");
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
    alert("Computer chose Scissors. It's a draw!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
