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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const results = document.querySelector(".results");

  rock.addEventListener("click", function () {
    let humanChoice = "Rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore, computerScore);
  });

  paper.addEventListener("click", function () {
    let humanChoice = "Paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore, computerScore);
  });

  scissors.addEventListener("click", function () {
    let humanChoice = "Scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(humanScore, computerScore);
  });

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
      results.textContent = "Computer chose Rock. It's a draw!";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
      results.textContent =
        "Computer chose Paper. Paper beats Rock, computer wins!";
      computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      results.textContent =
        "Computer chose Scissors. Rock beats Scissors, human wins!";
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      results.textContent =
        "Computer chose Rock. Paper beats Rock, human wins!";
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
      results.textContent = "Computer chose Paper. It's a draw!";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      results.textContent =
        "Computer chose Scissors. Scissors beats Paper, computer wins!";
      computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      results.textContent =
        "Computer chose Rock. Rock beats Scissors, computer wins!";
      computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      results.textContent =
        "Computer chose Paper. Scissors beats Paper, human wins!";
      humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
      results.textContent = "Computer chose Scissors. It's a draw!";
    }
  }
}

playGame();
