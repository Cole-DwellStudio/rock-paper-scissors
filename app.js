function getComputerChoice() {
  let validChoices = ["rock", "paper", "scissors"];
  let computerChoice;
  computerChoice = validChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getPlayerChoice() {
  let validChoices = ["rock", "paper", "scissors"];
  let playerChoice = prompt(
    "Please enter rock, paper, or scissors:"
  ).toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    alert("Invalid choice!");
    return;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper")
  ) {
    return "lose";
  } else if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "scissors" && playerChoice === "rock") ||
    (computerChoice === "paper" && playerChoice === "scissors")
  ) {
    return "win";
  }
}

function playGame(rounds) {
  let currentResult;
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < rounds; i++) {
    if (playerScore >= 3 || computerScore >= 3) {
      if (playerScore >= 3 && computerScore >= 3) {
        alert("Tie!");
      } else if (playerScore >= 3) {
        alert("You Win!");
      } else if (computerScore >= 3) {
        alert("You lose");
      }
      return;
    }

    currentResult = playRound(getPlayerChoice(), getComputerChoice());
    if (currentResult === "win") {
      playerScore++;
    } else if (currentResult === "lose") {
      computerScore++;
    } else if (currentResult === "tie") {
      playerScore++;
      computerScore++;
    }
    alert(`Round ${currentResult}. Score: ${playerScore} to ${computerScore}`);
  }
}
