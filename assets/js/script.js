const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id 
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber === 1) {
        computerChoice = 'bear'
    }
    if (randomNumber === 2) {
        computerChoice = 'ninja'
    }
    if (randomNumber === 3) {
        computerChoice = 'hunter'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'bear' && playerChoice === 'ninja') {
        result = "you died!"
        incrementLose()
    }
    if (computerChoice === 'bear' && playerChoice === 'hunter') {
        result = "You lived!"
        incrementScore()
    }
    if (computerChoice === 'ninja' && playerChoice === 'hunter') {
        result = "You died!"
        incrementLose()
    }
    if (computerChoice === 'ninja' && playerChoice === 'bear') {
        result = "You lived!"
        incrementScore()
    }
    if (computerChoice === 'hunter' && playerChoice === 'bear') {
        result = "You died!"
        incrementLose()
    }
    if (computerChoice === 'hunter' && playerChoice === 'ninja') {
        result = "You lived!"
        incrementScore()
    }
    resultDisplay.innerHTML = result
}

function incrementScore() {
    
    let oldScore = parseInt(document.getElementById('score').innerText)
    document.getElementById('score').innerText = ++oldScore

}

function incrementLose() {

    let oldScore = parseInt(document.getElementById('died').innerText)
    document.getElementById('died').innerText = ++oldScore
}