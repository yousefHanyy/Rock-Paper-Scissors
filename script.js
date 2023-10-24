/**
 *   ! Rock paper scissors against the computer
 *
 * * 1-Make a function named getComputerChoice() that gets and returns the computer's choice.
 *      TODO: Make an array that has the three values(rock, paper, scissors).
 *      TODO: Get a random number through math.random to choose a random choice (rock, paper or scissors).
 *
 * * 2-Make a function playRound() that plays a single round of the game then returns a result for example ('You lose. Paper beats Rock!').
 *      ? Function should take two parameters:
 *          TODO: (playerSelection, computerSelection)
 *          TODO: playerSelection value should be taken through a prompt.
 *          TODO: computerSelection value is taken from the getComputerChoice() return value.
 *
 * * 3-Write a function called game() using the prev. function inside this one to play a 5 round game.
 *      TODO: Use a loop to call the function.
 */

function getComputerChoice() {
  //**Implementing the computer random choice. **/
  const gameArray = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * gameArray.length);
  const randomValue = gameArray[randomIndex];
  return randomValue.toLowerCase();
}

function playRound() {
  const userInput = prompt(
    "Please enter your choice (Rock, Paper or Scissors)",
    "Rock"
  );
  const playerSelection = userInput.toLowerCase();
  const computerSelection = getComputerChoice();

  //**The logic for the game round **/
  if (playerSelection === computerSelection) {
    return (
      "Player chose: " +
      playerSelection +
      " Computer chose: " +
      computerSelection +
      "\nThe result is: Draw!"
    );
  } else if (
    (playerSelection == "rock") & (computerSelection == "paper") ||
    (playerSelection == "scissors") & (computerSelection == "rock") ||
    (playerSelection == "paper") & (computerSelection == "scissors")
  ) {
    return (
      "Player chose: " +
      playerSelection +
      " Computer chose: " +
      computerSelection +
      "\nThe result is: Computer wins!"
    );
  } else {
    return (
      "Player chose: " +
      playerSelection +
      " Computer chose: " +
      computerSelection +
      "\nThe result is: Player wins!"
    );
  }
}
const result = playRound();
console.log(result);
