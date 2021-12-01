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

let ballLocation;
let clicked;
let ball;
let scoreCorrect = 0;
let scoreIncorrect = 0;
let scoreTotal;
const cupArray = [cup1, cup2, cup3];

button1.addEventListener('click', () => {
    clicked = cup1;
    ball = ball1;
    getRandomItem(cupArray);
    revealReset();
    handleGuess(clicked, ballLocation);
});

button2.addEventListener('click', () => {
    clicked = cup2;
    ball = ball2;
    getRandomItem(cupArray);
    revealReset();
    handleGuess(clicked, ballLocation);
});

button3.addEventListener('click', () => {
    clicked = cup3;
    ball = ball3;
    getRandomItem(cupArray);
    revealReset();
    handleGuess(clicked, ballLocation);
});

function cupAnimation() {
    clicked.classList.add('cup-animation');
    setTimeout(() => {
        clicked.classList.remove('cup-animation');
    }, 500);
}

function ballAnimation() {
    ball.classList.add('ball-animation');
    setTimeout(() => {
        ball.classList.remove('ball-animation');
    }, 500);
}

function getRandomItem(cupArray) {
    let i = Math.floor(Math.random() * cupArray.length);
    ballLocation = cupArray[i];
}

function revealReset() {
    ballLocation.style.gridRow = '2 / span 2';
    setTimeout(() => {
        ballLocation.style.gridRow = '3 / span 2';
    }, 750);
}

function handleGuess(clicked, ballLocation) {
    if (clicked === ballLocation) {
        scoreCorrect++;
        ballAnimation();
    } else if (clicked !== ballLocation) {
        scoreIncorrect++;
        cupAnimation();
    }
    scoreTotal = scoreCorrect / (scoreIncorrect + scoreCorrect) * 100;
    correct.textContent = scoreCorrect;
    incorrect.textContent = scoreIncorrect;
    total.textContent = scoreTotal.toFixed(0);
}