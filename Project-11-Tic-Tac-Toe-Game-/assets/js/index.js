const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".statusText");
const reset = document.querySelector("#reset");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gamePlaying = false;

const launchGame = () => {
  gamePlaying = true;
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  reset.addEventListener("click", restartGame);
  statusText.textContent = `C'est le tour de ${currentPlayer}`;
};

const updateCell = (cell, index) => {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
};

const cellClicked = function () {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] !== "" || !gamePlaying) return;

  updateCell(this, cellIndex);
  checkWinner();
};

const checkWinner = () => {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (options[a] && options[a] === options[b] && options[a] === options[c]) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = `${currentPlayer} gagne!`;
    gamePlaying = false;
  } else if (!options.includes("")) {
    statusText.textContent = "C'est un match nul!";
    gamePlaying = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `C'est le tour de ${currentPlayer}`;
  }
};

const restartGame = () => {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `C'est le tour de ${currentPlayer}`;
  cells.forEach((cell) => (cell.textContent = ""));
  gamePlaying = true;
};

launchGame();
