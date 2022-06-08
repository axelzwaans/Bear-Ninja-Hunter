const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let bear = new Audio("assets/audio/bear.mp3");
let ninja = new Audio("assets/audio/ninja.mp3");
let hunter = new Audio("assets/audio/hunter.mp3");
let playerChoice;
let computerChoice;
let result;

window.onload = function() {
    alert("This game uses sound effects!");
}

function outcome()
 {
    let old_elem = document.getElementById("ready");
    let new_elem = document.getElementById("result");
    old_elem.replaceWith(new_elem);
 }

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
    outcome();
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
        computerChoice = 'bear';
    }
    if (randomNumber === 2) {
        computerChoice = 'ninja';
    }
    if (randomNumber === 3) {
        computerChoice = 'hunter';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = "It's a draw!";
        document.getElementById('bear').src = 'assets/images/bear_win.png';
        document.getElementById('ninja').src = 'assets/images/ninja_win.png';
        document.getElementById('hunter').src = 'assets/images/hunter_win.png';
    }

    if (computerChoice === 'bear' && playerChoice === 'ninja') {
        result = "You lose!";
        incrementLose();
        document.getElementById('ninja').src = 'assets/images/ninja_lose.png';
        document.getElementById('bear').src = 'assets/images/bear_win.png';
        document.getElementById('hunter').src = 'assets/images/hunter_win.png';
        hide();
    }

    if (computerChoice === 'bear' && playerChoice === 'hunter') {
        result = "You win!";
        incrementScore();
        document.getElementById('hunter').src = 'assets/images/hunter_win.png';
        document.getElementById('bear').src = 'assets/images/bear_lose.png';
        document.getElementById('ninja').src = 'assets/images/ninja_win.png';
        hunter.play();
    }

    if (computerChoice === 'ninja' && playerChoice === 'hunter') {
        result = "You lose!";
        incrementLose();
        document.getElementById('hunter').src = 'assets/images/hunter_lose.png';
        document.getElementById('ninja').src = 'assets/images/ninja_win.png';
        document.getElementById('bear').src = 'assets/images/bear_win.png';
    }

    if (computerChoice === 'ninja' && playerChoice === 'bear') {
        result = "You win!";
        incrementScore();
        document.getElementById('bear').src = 'assets/images/bear_win.png';
        document.getElementById('ninja').src = 'assets/images/ninja_lose.png';
        document.getElementById('hunter').src = 'assets/images/hunter_win.png';
        bear.play();
    }

    if (computerChoice === 'hunter' && playerChoice === 'bear') {
        result = "You lose!";
        incrementLose();
        document.getElementById('bear').src = 'assets/images/bear_lose.png';
        document.getElementById('ninja').src = 'assets/images/ninja_win.png';
        document.getElementById('hunter').src = 'assets/images/hunter_win.png';
    }

    if (computerChoice === 'hunter' && playerChoice === 'ninja') {
        result = "You win!";
        incrementScore();
        document.getElementById('ninja').src = 'assets/images/ninja_win.png';
        document.getElementById('hunter').src = 'assets/images/hunter_lose.png';
        document.getElementById('bear').src = 'assets/images/bear_win.png';
        ninja.play();
    }

    resultDisplay.innerHTML = result;
}

function incrementScore() {  
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementLose() {
    let oldScore = parseInt(document.getElementById('died').innerText);
    document.getElementById('died').innerText = ++oldScore;
}


