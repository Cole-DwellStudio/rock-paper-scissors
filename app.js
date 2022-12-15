const buttons = document.querySelectorAll("button");
const playerScoreDiv = document.querySelector(".playerScore");
const computerScoreDiv = document.querySelector(".computerScore");
const ScoreDiv = document.querySelector(".score");
const computerPlay = document.querySelector(".computerPlay");
const playerPlay = document.querySelector(".playerPlay");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

function playGame(playerChoice) {
  const result = playRound(playerChoice);

  // handle the result of playRound
  if (result === "won") {
    playerScore++;
    ScoreDiv.textContent = `Round won`;
  } else if (result === "lost") {
    computerScore++;
    ScoreDiv.textContent = `Round lost`;
  } else if (result === "tied") {
    // playerScore++;
    // computerScore++;
    ScoreDiv.textContent = `Round tied`;
  }

  // update the UI to show the current scores
  playerScoreDiv.textContent = `Your score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer score: ${computerScore}`;

  // check if the game is over, if so update UI and reset game
  if (playerScore === 5 && computerScore === 5) {
    ScoreDiv.textContent = "GAME TIED";
    resetGame();
    return;
  } else if (playerScore >= 5) {
    ScoreDiv.textContent = "GAME WON";
    resetGame();
    return;
  } else if (computerScore >= 5) {
    ScoreDiv.textContent = "GAME LOST";
    resetGame();
    return;
  }
}

function playRound(playerChoice) {
  playerPlay.textContent = playerChoice;
  let computerChoice = getComputerChoice();

  // handle conditions and return round result
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") {
        return "tied";
      } else if (computerChoice === "paper") {
        return "lost";
      } else if (computerChoice == "scissors") {
        return "won";
      }
    case "paper":
      if (computerChoice === "paper") {
        return "tied";
      } else if (computerChoice === "scissors") {
        return "lost";
      } else if (computerChoice == "rock") {
        return "won";
      }
    case "scissors":
      if (computerChoice === "scissors") {
        return "tied";
      } else if (computerChoice === "rock") {
        return "lost";
      } else if (computerChoice == "paper") {
        return "won";
      }
  }
  return "invalid";
}

function getComputerChoice() {
  let validChoices = ["rock", "paper", "scissors"];
  let computerChoice;
  computerChoice = validChoices[Math.floor(Math.random() * 3)];
  computerPlay.textContent = computerChoice;
  return computerChoice;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDiv.textContent = `Your score:`;
  computerScoreDiv.textContent = `Computer score:`;
}
