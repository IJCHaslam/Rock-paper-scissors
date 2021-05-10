//Initial scores
let playerScore = 0;
let computerScore = 0;

// Producing computer moves. 
function computerPlay() {
    let computerMoves = ['rock', 'paper', 'scissors'];
    let computerChoices = Math.floor(Math.random() * 3);
    return computerMoves[computerChoices];
}

// 2... Make a function that plays a single round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    console.log(`You selected: "${playerSelection}"`);
    console.log(`Computer selected: "${computerSelection}"`);

//Draw
    if (playerSelection === computerSelection) {
        console.log('Draw!')
        return;
    }
//Player chooses Rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            console.log('You win! Rock beats scissors.')
            return; 
        } else {
            computerScore++
            console.log('You lose! Paper beats Rock!')
            return;
        }
    }

//Player chooses Paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++
            console.log('You win! Paper beats Rock.')
            return;
        } else {
            computerScore++
            console.log('You lose! Scissors beat paper.')
            return;
        }
    }

//Player chooses Scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++
            console.log('You win! Scissors beat Paper.')
            return;
        } else {
            computerScore++
            console.log('You lose! Rock beats scissors.')
            return;
        }
    }
}

// Play a game using prompt and computerPlay function
function game() {
    const playerInput = prompt('What is your move?')
    playRound(playerInput.toLowerCase(), computerPlay())
    console.log(playerScore)
    console.log(computerScore)
    return;
}

// Play 5 games in a row. 
game()
game()
game()
game()
game()
