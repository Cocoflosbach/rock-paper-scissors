// What should happen when user clicks one of the buttons?
//
//

let computerScore = 0;
let playerScore = 0;

// Function returns either rock, paper or scissors as computer play
function computerPlay() {
  const num = Math.floor(Math.random() * 3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Returns player's choice for a round of game
function playerChoice() {
  const choice = prompt(
    "Your Play! Choose between Rock, Paper and Scissors"
  ).toLowerCase();
  return choice;
  console.log(choice);
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

function gameRound(playerSelection, computerSelection) {
  playerSelection = playerChoice();
  computerSelection = computerChoice();

  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("We have a tie! Try again.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("You Lost! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("You Won! Scissors beats Paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("You Won! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("You Lost! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("You Lost! Rock beats Scissors");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log(
      "You chose: " + playerSelection + ", Computer chose: " + computerSelection
    );
    console.log("You Won! Rock beats Scissors");
  }

  console.log(
    "Player scored: " + playerScore,
    " and Computer scored: " + computerScore
  );
}

function playGame() {
  const computerSelection = computerChoice();
  const playerSelection = playerChoice();

  for (let i = 0; i < 5; i++) {
    gameRound(computerSelection, playerSelection);
  }
  //console.log(gameRound(computerSelection, playerSelection));
  console.log(gameScores());
}
