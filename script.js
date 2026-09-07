let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?")
    return choice.toLowerCase()
}
console.log(getHumanChoice())