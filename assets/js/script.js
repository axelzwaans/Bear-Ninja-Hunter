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
let yourScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.getElementById('playerScore')
let computerScoreDisplay = document.getElementById('computerScore')

window.onload = function() {
    alert("This game has sound effects!");
}

function outcome() {
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
    var oldScore = parseInt(document.getElementById('playerScore').innerText);
    document.getElementById('playerScore').innerText = ++oldScore;
    yourScore++;
    finishRound();
}

function incrementLose() {
    var oldScore = parseInt(document.getElementById('computerScore').innerText);
    document.getElementById('computerScore').innerText = ++oldScore;
    computerScore++;
    finishRound();
}

function finishRound() {
    if(yourScore == 5) {
        result = "You win this round!!!"
        oldScore = parseInt(document.getElementById('playerScore').innerText);
        document.getElementById('playerScore').innerText = 0;
        oldScore = parseInt(document.getElementById('computerScore').innerText);
        document.getElementById('computerScore').innerText = 0;
        yourScore = 0;
        computerScore = 0;
     }
    if(computerScore == 5) {
        result = "You lose this round!!!"
        oldScore = parseInt(document.getElementById('playerScore').innerText);
        document.getElementById('playerScore').innerText = 0;
        oldScore = parseInt(document.getElementById('computerScore').innerText);
        document.getElementById('computerScore').innerText = 0;
        yourScore = 0;
        computerScore = 0;
    }
  
}