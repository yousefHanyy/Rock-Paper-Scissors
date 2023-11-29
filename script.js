const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");

const playerImage = document.querySelector("#playerChoice");
const computerImg = document.querySelector("#computerChoice");

const computerPDiv = document.querySelector("#computerPointsDiv");
const playerPDiv = document.getElementById("#playerPointsDiv");
let playerPointsNum = 0;
let computerPointsNum = 0;

const rockClicked = rockBtn.addEventListener("click", playRound);
const paperClicked = paperBtn.addEventListener("click", playRound);
const scissorsClicked = scissorsBtn.addEventListener("click", playRound);

function getComputerChoice() {
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

//**Adding an element that displays the points and calculating who gets 5 points first**//
function computerPointsCalc() {
  const computerPoints = document.createElement("div");
  computerPoints.setAttribute("style", "font-size:25px");
  computerPoints.textContent = "Points: " + computerPointsNum;
  computerPDiv.appendChild(computerPoints);
}
function playerPointsCalc() {
  const playerPoints = document.createElement("div");
  playerPoints.setAttribute("style", "font-size:25px");
  playerPoints.textContent = "Points: " + playerPointsNum;
  playerPDiv.appendChild(playerPoints);
}

function playRound(event) {
  playerImage.innerHTML = "";
  const choiceImg = document.createElement("img");
  choiceImg.classList.add("choiceImages");
  //**The logic for attaching corresponding image of the players choice.**/
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

  const computerImgSelect = computerImg.firstChild;
  //**Logic for deciding the winner so points can be given.**//
  //!!WE CANNOT USE choiceImg.src AS IN JAVASCRIPT THE FULL FILE PATH IS THEN USED SO INSTEAD USE THE GET ATTRIBUTE METHOD TO GET THE SRC!!//
  if (
    (computerImgSelect.getAttribute("src") === "images/rock.png" &&
      choiceImg.getAttribute("src") === "images/scissors.png") ||
    (computerImgSelect.getAttribute("src") === "images/scissors.png" &&
      choiceImg.getAttribute("src") === "images/paper.png") ||
    (computerImgSelect.getAttribute("src") === "images/paper.png" &&
      choiceImg.getAttribute("src") === "images/rock.png")
  ) {
    computerPointsNum += 1;
    computerPointsCalc();
  } else if (
    (computerImgSelect.getAttribute("src") === "images/scissors.png" &&
      choiceImg.getAttribute("src") === "images/rock.png") ||
    (computerImgSelect.getAttribute("src") === "images/paper.png" &&
      choiceImg.getAttribute("src") === "images/scissors.png") ||
    (computerImgSelect.getAttribute("src") === "images/rock.png" &&
      choiceImg.getAttribute("src") === "images/paper.png")
  ) {
    playerPointsNum += 1;
    playerPointsCalc();
  }
  if (computerPointsNum === 5 || playerPointsNum === 5) {
    endGame();
  }
}

function endGame() {
  if (computerPointsNum > playerPointsNum) {
    alert("Computer wins!");
  } else if (playerPointsNum > computerPointsNum) {
    alert("Player wins!");
  } else {
    alert("It's a tie!");
  }
  playerPointsNum = 0;
  computerPointsNum = 0;
  playerImage.innerHTML = "";
  computerImg.innerHTML = "";
  playerPDiv.innerHTML = "";
  computerPDiv.innerHTML = "";
}
