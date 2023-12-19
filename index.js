// `use-strict`;

let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".message-container");
let dispMsg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let reset = document.querySelector(".reset");
let countX = document.querySelector(".countXWinner");
let countO = document.querySelector(".countOWinner");

let turnX = true;
let countXwinner = 0;
let countOwinner = 0;

let winnPattrens = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showWinner = (posVal1) => {
  winner.classList.remove("hide");
  dispMsg.innerText = `Congratulations the winner is player ${posVal1}`;
  //   console.log(posVal1);
  if (posVal1 === "X") {
    countXwinner++;
    countX.innerHTML = `Player X wins =${countXwinner}`;
  } else {
    countOwinner++;
    countO.innerHTML = `Player O wins =${countOwinner}`;
  }
};

const resetGame = () => {
  turnX = true;
  winner.classList.add("hide");
  disabledBoxes();
  enableBoxes();
};

const disabledBoxes = () => {
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

const checkWinner = () => {
  for (let pattern of winnPattrens) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    // console.log(posVal1, posVal2, posVal3);
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        // console.log("The winner is" + " " + posVal1);
        disabledBoxes();
        showWinner(posVal1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("The box is clicked");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
