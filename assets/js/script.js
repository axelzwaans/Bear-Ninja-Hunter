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

