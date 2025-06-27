let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO && box.innerHTML === "") {
      box.innerHTML = "O";
      turnO = false;
    } else if (!turnO && box.innerHTML === "") {
      box.innerHTML = "X";
      turnO = true;
    }
    checkWinner();
  });
});

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      boxes[a].innerHTML &&
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      alert(`Player ${boxes[a].innerHTML} wins!`);
      resetGame();
      return;
    }
  }

  let allFilled = true;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === "") {
      allFilled = false;
      break; 
    }
  }

  if (allFilled) {
    alert("It's a draw!");
    resetGame();
  }
}

function resetGame() {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  turnO = true;
}

resetBtn.addEventListener("click", resetGame);
