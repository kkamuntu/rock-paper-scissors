let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("You draw!")
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
    }
    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)