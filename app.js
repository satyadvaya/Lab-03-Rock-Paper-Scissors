import checkResult from '../check-result.js;'

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsDiv = document.getElementById('wins');
const lossesDiv = document.getElementById('loses');
const drawsDiv = document.getElementById('draws');
const playsTotal = document.getElementById('total');

let userWins = 0;
let userLoses = 0;
let userDraws = 0;
let gameTotal = 0;


function getRandomThrow() {
    const computerChoice = Math.floor(Math.random() * 3 + 1) ;
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';    
    } else {
        return 'scissors';
    }
}

console.log(computerChoice);

playButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input[type=radio]:checked');
    let UserThrow = userChoice.value;
    let computerThrow = getRandomThrow();
    if (checkResult(userThrow, computerThrow) === 'wins') {
        userWins ++;
        gameWon.textContent = userWins;
    } else if (checkResult(userThrow, computerThrow) === 'loses') {
        userLoses ++;
        gameLost.textContent = userLoses;
    } else (checkResult(userThrow, computerThrow) === 'draws') {
        userDraws ++;
        gameDrawn.textContent = userDraws;
        gameTotal ++;
    }
};

resetButton.addEventListener('click', () => {
    wins = 0;
    totals = 0;
    winsDiv.textContent = '';
    totalsDiv.textContent = '';  
});