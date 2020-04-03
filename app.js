import { checkResult } from './check-result.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsDiv = document.getElementById('wins');
const losesDiv = document.getElementById('loses');
const drawsDiv = document.getElementById('draws');

let userWins = 0;
let userLoses = 0;
let userDraws = 0;

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

playButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input[type=radio]:checked');
    let userThrow = userChoice.value;
    let computerThrow = getRandomThrow();
    if (checkResult(userThrow, computerThrow) === 'wins') {
        userWins ++;
        winsDiv.textContent = userWins;
    } else if (checkResult(userThrow, computerThrow) === 'loses') {
        userLoses ++;
        losesDiv.textContent = userLoses;
    } else if (checkResult(userThrow, computerThrow) === 'draws') {
        userDraws ++;
        drawsDiv.textContent = userDraws;
    }
});

resetButton.addEventListener('click', () => {
    userWins = 0;
    userLoses = 0;
    userDraws = 0;
    winsDiv.textContent = '';
    losesDiv.textContent = '';
    drawsDiv.textContent = '';
});