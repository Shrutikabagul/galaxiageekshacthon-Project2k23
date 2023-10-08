

// const holes = document.querySelectorAll('.hole');
// const scoreBoard = document.querySelector('.score');
// const moles = document.querySelectorAll('.mole');
// let lastHole;
// let timeUp = false;
// let gameInProgress = false; // Flag to track if the game is already in progress
// let score = 0;

// function randomTime(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// function randomHole(holes){
//     const index = Math.floor(Math.random() * holes.length);
//     const hole = holes[index];

//     if (hole === lastHole) {
//         return randomHole(holes);
//     }
//     lastHole = hole;
//     return hole;
// }

// function peep() {
//     if (!gameInProgress) {
//         return; // Do nothing if the game is not in progress
//     }

//     const time = randomTime(500, 1000);
//     const hole = randomHole(holes);
//     hole.classList.add('up');
//     setTimeout(() => {
//         hole.classList.remove('up');
//         if (!timeUp) {
//             peep();
//         }
//     }, time);
// }

// function startGame() {
//     if (gameInProgress) {
//         return; // Do nothing if the game is already in progress
//     }

//     gameInProgress = true;

//     scoreBoard.textContent = 0;
//     timeUp = false;
//     score = 0;
//     peep();
//     setTimeout(() => {
//         timeUp = true;
//         gameInProgress = false;
//     }, 15000);
// }

// function wack(e){
//     if (!e.isTrusted) return;
//     score++;
//     this.parentNode.classList.remove('up');
//     scoreBoard.textContent = score;
// }

// moles.forEach(mole => mole.addEventListener('click', wack));


const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let gameInProgress = false;
let score = 0;
let coinCount = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    if (!gameInProgress) {
        return;
    }

    const time = randomTime(500, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
        }
    }, time);
}

function startGame() {
    if (gameInProgress) {
        return;
    }

    gameInProgress = true;

    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    coinCount = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
        gameInProgress = false;
        // Show congratulatory message with coin count
        alert(`Congratulations! You earned ${coinCount} coins.`);
    }, 15000);
}

function wack(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    coinCount++;
}

moles.forEach(mole => mole.addEventListener('click', wack));
