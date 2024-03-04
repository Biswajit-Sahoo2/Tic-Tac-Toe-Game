let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".newGame");
let resetGameBtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msgContainer");

let count = 0;

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const draw = () => {
  msg.innerText = "Match was draw. Play again";
  msgContainer.classList.remove("hide");
  disableBoxes();
  count = 0;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#819595";
      turnO = false;
      count++;
    }
    else {
      box.innerText = "X";
      box.style.color = "#000000";
      turnO = true;
      count++;
    }
    box.disabled = true;
    checkWinner();
    if (count === 9) {
      draw();
    }
  })
})

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  count = 0;
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  msgContainer.classList.add("hide");
  turnO = true;
  enableBoxes();
  count = 0;
};

resetGameBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', resetGame);

