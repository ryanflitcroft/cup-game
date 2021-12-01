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

// let state
let ballLocation;
let clicked;
let scoreCorrect = 0;
let scoreIncorrect = 0;
let scoreTotal;
const cupArray = [cup1, cup2, cup3];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button1.addEventListener('click', () => {
    clicked = cup1;
    getRandomItem(cupArray);
    revealReset();
    // score();
    handleGuess(clicked, ballLocation);
    console.log(clicked);
});

button2.addEventListener('click', () => {
    clicked = cup2;
    getRandomItem(cupArray);
    revealReset();
    // score();
    handleGuess(clicked, ballLocation);
});

button3.addEventListener('click', () => {
    clicked = cup3;
    getRandomItem(cupArray);
    revealReset();
    // score();
    handleGuess(clicked, ballLocation);
});


function getRandomItem(arr) {
    let i = Math.floor(Math.random() * cupArray.length);
    ballLocation = cupArray[i];
}

function revealReset() {
    ballLocation.style.gridRow = '2 / span 2';
    setTimeout(() => {
        ballLocation.style.gridRow = '3 / span 2';
    }, 750);
}

// function score() {
//     if (clicked === ballLocation) {
//         scoreCorrect++;
//     } else if (clicked !== ballLocation) {
//         scoreIncorrect++;
//     }
//     scoreTotal = scoreCorrect / (scoreIncorrect + scoreCorrect) * 100;
//     correct.textContent = scoreCorrect;
//     incorrect.textContent = scoreIncorrect;
//     total.textContent = scoreTotal.toFixed(0);
// }

function handleGuess(clicked, ballLocation) {
    if (clicked === ballLocation) {
        scoreCorrect++;
    } else if (clicked !== ballLocation) {
        scoreIncorrect++;
        animation();
    }
    scoreTotal = scoreCorrect / (scoreIncorrect + scoreCorrect) * 100;
    correct.textContent = scoreCorrect;
    incorrect.textContent = scoreIncorrect;
    total.textContent = scoreTotal.toFixed(0);
}

function animation() {
    clicked.classList.add('cup-animation');
    setTimeout(() => {
        clicked.classList.remove('cup-animation');
    }, 500);
}