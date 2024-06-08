function main() {
  let humanScore = 0;
  let computerScore = 0;
  let winScore = 5;
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const results = document.querySelector(".results");
  const buttons = document.querySelector(".buttons");
  results.setAttribute("style", "white-space: pre;");

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

  rock.addEventListener("click", function () {
    let humanChoice = "Rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    winCondition();
  });

  paper.addEventListener("click", function () {
    let humanChoice = "Paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    winCondition();
  });

  scissors.addEventListener("click", function () {
    let humanChoice = "Scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    winCondition();
  });

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
      results.textContent = `Computer chose Rock. It's a draw!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
      computerScore++;
      results.textContent = `Computer chose Paper. Paper beats Rock, computer wins!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      humanScore++;
      results.textContent = `Computer chose Scissors. Rock beats Scissors, human wins!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      humanScore++;
      results.textContent = `Computer chose Rock. Paper beats Rock, human wins!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
      results.textContent = `Computer chose Paper. It's a draw!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      computerScore++;
      results.textContent = `Computer chose Scissors. Scissors beats Paper, computer wins!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      computerScore++;
      results.textContent = `Computer chose Rock. Rock beats Scissors, computer wins!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      results.textContent = `Computer chose Paper. Scissors beats Paper, human wins!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
      results.textContent = `Computer chose Scissors. It's a draw!\r\nScore: Human ${humanScore}, Computer ${computerScore}`;
    }
  }

  function winCondition() {
    if (humanScore === winScore) {
      const humanWin = document.createTextNode("\r\nHuman wins!");
      results.appendChild(humanWin);
      buttons.removeChild(rock);
      buttons.removeChild(paper);
      buttons.removeChild(scissors);
    } else if (computerScore === winScore) {
      const computerWin = document.createTextNode("\r\nComputer wins!");
      results.appendChild(computerWin);
      buttons.removeChild(rock);
      buttons.removeChild(paper);
      buttons.removeChild(scissors);
    }
  }
}

main();
