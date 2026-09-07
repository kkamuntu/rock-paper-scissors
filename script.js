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
        humanScore++
    }
}


function playGame(){
    let round = 1;

    while (round <= 5) {
        console.log(`Round ${round}`);
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`You: ${humanScore}, Computer ${computerScore}.`)
        round++
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win!")
    }
    else if (computerScore > humanScore) {
        console.log("You lose. Better luck next time.")
    }
    else {
        console.log("It's a tie! Good game!")
    }
}

playGame()