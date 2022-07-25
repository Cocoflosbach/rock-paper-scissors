let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll("button");

// Function returns either rock, paper or scissors as computer play
function computerPlay() {
  const num = Math.floor(Math.random() * 3);
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Returns computer's choice for a round of game
function computerChoice() {
  const choice = computerPlay().toLowerCase();
  return choice;
  console.log(choice);
}

// Returns the final scores for player and computer
function gameScores() {
  const losingMessage =
    "Player Lost! Player scored " +
    playerScore +
    " and Computer scored " +
    computerScore;
  const winningMessage =
    "Player Won! Player scored " +
    playerScore +
    " and Computer scored " +
    computerScore;
  const tieMessage = "Its a tie! Play another round!";

  if (playerScore < computerScore) {
    return losingMessage;
    console.log(losingMessage);
  } else if (playerScore > computerScore) {
    return winningMessage;
    console.log(winningMessage);
  } else {
    return tieMessage;
    console.log(tieMessage);
  }
}

//Defines the rules of the game and returns a winner for each round
function gameRound(playerSelection) {
  let computerSelection = computerChoice();

  let choices = document.querySelector("#choices");
  let roundResult = document.querySelector("#round-result");
  let scores = document.querySelector("#scores");
  // let totalScore = document.querySelector("#total-score");

  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "We have a tie! Try again.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "You Lost! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "You Won! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "You Won! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "You Lost! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "You Lost! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    choices.textContent =
      "You chose: " +
      playerSelection.toUpperCase() +
      ", Computer chose: " +
      computerSelection.toUpperCase();
    roundResult.textContent = "You Won! Rock beats Scissors";
  }
  scores.textContent =
    "Player Score: " + playerScore + ", Computer Score: " + computerScore;
  //totalScore.textContent = gameScores();
}

function playGame() {
  buttons.forEach((button) => {
    const playerPlay = button.id;
    console.log(playerPlay);
    button.addEventListener("click", function (event) {
      gameRound(playerPlay);
      event.preventDefault();
    });
  });
}

playGame();

function reloadThePage() {
  window.location.reload(true);
}
