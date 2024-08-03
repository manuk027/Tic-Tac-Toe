let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let newGameBtn = document.getElementById("new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPatterns = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8]
];

const restGame = () => {
     turn = true;
     enBoxes();
     msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
     box.addEventListener("click", () => {
          if(turn) {
               box.innerText = "O";
               turn = false;
          } else {
               box.innerText = "X";
               turn = true;
          }
          box.disabled = true;
          checkWinner();
     })
})

const disBoxes = () => {
     for (let box of boxes) {
          box.disabled = true;
     }
};

const enBoxes = () => {
     for (let box of boxes) {
          box.disabled = false;
          box.innerText = "";
     }
};

const showWinner = (winner) => {
     msg.innerText = `Congratulation, winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disBoxes();
};

const checkWinner = () => {
     for (let pattern of winPatterns) {
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;
          if(pos1val != "" && pos2val != "" && pos3val != "") {
               if (pos1val == pos2val && pos2val == pos3val) {
                    showWinner(pos1val);
               }
          }
     }
};

newGameBtn.addEventListener("click", restGame);
reset.addEventListener("click", restGame);