// import functions and grab DOM elements

const cup1 = document.getElementById('cup1');
const cup2 = document.getElementById('cup2');
const cup3 = document.getElementById('cup3');

const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const incorrect = document.getElementById('incorrect');
const correct = document.getElementById('correct');
const total = document.getElementById('total');
// console.log(cup1, cup2, cup3, ball1, ball2, ball3, button1, button2, button3, incorrect, correct, total);

// let state
let ballLocation;
let clicked;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button1.addEventListener('click', () => {
    clicked = button1;
    getRandom();
    revealReset();
});

button2.addEventListener('click', () => {
    clicked = button2;
    getRandom();
    revealReset();
});

button3.addEventListener('click', () => {
    clicked = button3;
    getRandom();
    revealReset();
});


function getRandom() {
    const cupArray = [cup1, cup2, cup3];
    let i = Math.floor(Math.random() * cupArray.length);
    ballLocation = cupArray[i];
}

function revealReset() {
    ballLocation.style.gridRow = '2 / span 2';
    setTimeout(() => {
        ballLocation.style.gridRow = '3 / span 2';
    }, 500);
}

function score() {

}