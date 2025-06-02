const boxes = document.querySelectorAll(".boxes");
const reset = document.querySelector(".reset");
const play = document.querySelector(".play");
const win = document.querySelector(".win");
const turn1 = document.querySelector(".switch1");
const turn2 = document.querySelector(".switch");
let clickSound= new Audio("click.wav");
let winnerSound=new Audio("winner.mp3");
let turn0 = true;

const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        clickSound.play();
        if(turn0){
            box.innerText="O";
            box.style.color="blue";
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
            box.classList.remove("hover-button");
            turn0 = false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s");
            box.classList.remove("hover-button");
            turn0 = true;
        }

        box.disabled=true;

        checkWinner();
    }); 
});

const checkWinner = () => {
    for(let i = 0;i<winningPattern.length;i++){
        let pos1 = boxes[winningPattern[i][0]].innerText;
        let pos2 = boxes[winningPattern[i][1]].innerText;
        let pos3 = boxes[winningPattern[i][2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                winnerSound.play();
                win.innerText=`Congratulations !!!
                Winner : Player ${pos1}`;
                boxes.forEach( (box) => {
                    box.classList.add("non-winner");
                });
                boxes[winningPattern[i][0]].classList.add("winner");
                boxes[winningPattern[i][1]].classList.add("winner");
                boxes[winningPattern[i][2]].classList.add("winner");
                stopGame();
            }
        }

    }
};

const stopGame = () => {
    boxes.forEach( (box) => {
        box.disabled = true;
    });
};

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        win.innerText="";
        turn0 = true;
        turn1.classList.remove("b-s");
        turn2.classList.remove("b-s");
        box.classList.add("hover-button");
        box.classList.remove("non-winner");
        box.classList.remove("winner");
    });
});

play.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        win.innerText="";
        turn0 = true;
        turn1.classList.remove("b-s");
        turn2.classList.remove("b-s");
        box.classList.add("hover-button");
        box.classList.remove("non-winner");
        box.classList.remove("winner");
    });
});