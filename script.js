// game();

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");

const rockClicked = rockBtn.addEventListener("click", playRound);
const paperClicked = paperBtn.addEventListener("click", playRound);
const scissorsClicked = scissorsBtn.addEventListener("click", playRound);

function getComputerChoice() {
  const computerImg = document.querySelector("#computerChoice");
  computerImg.innerHTML = "";
  const computerChoice = document.createElement("img");
  computerChoice.classList.add("choiceImages");
  const gameArray = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * gameArray.length);
  const randomValue = gameArray[randomIndex];
  if (randomValue === "Rock") {
    computerChoice.src = "images/rock.png";
    computerImg.appendChild(computerChoice);
  } else if (randomValue === "Paper") {
    computerChoice.src = "images/paper.png";
    computerImg.appendChild(computerChoice);
  } else if (randomValue === "Scissors") {
    computerChoice.src = "images/scissors.png";
    computerImg.appendChild(computerChoice);
  }
}

function playRound(event) {
  const playerImage = document.querySelector("#playerChoice");
  playerImage.innerHTML = "";
  const choiceImg = document.createElement("img");
  choiceImg.classList.add("choiceImages");
  //**The logic for the game round **/
  let playerSelection = event.target.id;
  if (playerSelection === "Rock") {
    choiceImg.src = "images/rock.png";
    playerImage.appendChild(choiceImg);
  } else if (playerSelection === "Paper") {
    choiceImg.src = "images/paper.png";
    playerImage.appendChild(choiceImg);
  } else if (playerSelection === "Scissors") {
    choiceImg.src = "images/scissors.png";
    playerImage.appendChild(choiceImg);
  }
  getComputerChoice();
}
//**Function for playing the game 5 times and then logging the result.**/
//!We will change the below code to let the game count whoever gets 5 points first and based on that determines the result.
// function game() {
//   const result = playRound();
//   console.log(result);
// }
