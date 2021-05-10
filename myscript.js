// Move Variables

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//Initial scores
let playerScore = 0;
let computerScore = 0;

// Producing computer moves. 
function computerPlay() {
    let computerMoves = ['rock', 'paper', 'scissors'];
    let computerChoices = Math.floor(Math.random() * 3);
    return computerMoves[computerChoices];
}

// Function that plays a single round of Rock, Paper, Scissors.
function playRound(playerSelection, computerSelection) {
    
//Draw
    if (playerSelection === computerSelection) {
        document.getElementById('text-content').textContent = 'Draw!';
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
        return;
    }
//Player chooses Rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('text-content').textContent = `You win! You selected: ${playerSelection} 
                                                                    and computer selected: ${computerSelection}.`;
            return; 
        } else {
            computerScore++
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('text-content').textContent = `You lose! You selected: ${playerSelection} 
                                                                    and computer selected: ${computerSelection}.`;
            return;
        }
    }

//Player chooses Paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('text-content').textContent = `You win! You selected: ${playerSelection} 
                                                                    and computer selected: ${computerSelection}.`;
            return;
        } else {
            computerScore++
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('text-content').textContent = `You lose! You selected: ${playerSelection} 
                                                                    and computer selected: ${computerSelection}.`;
            return;
        }
    }

//Player chooses Scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('text-content').textContent = `You win! You selected: ${playerSelection} 
                                                                    and computer selected: ${computerSelection}.`;
            return;
        } else {
            computerScore++
            document.getElementById('computer-score').textContent = computerScore;
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('text-content').textContent = `You lose! You selected: ${playerSelection} 
                                                                    and computer selected: ${computerSelection}.`;
            return;
        }
    }
}

//Event listener options

rock.addEventListener('click', e => {
    playRound("rock", computerPlay())
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0; 
        alert("WINNER!!!!");
        return;
    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0; 
        alert("You lose :(");
        return;
    }
})

paper.addEventListener('click', e => {
    playRound("paper", computerPlay())
    if (playerScore === 5) {
        alert("WINNER!!!");
        playerScore = 0;
        computerScore = 0; 
        return;
    } else if (computerScore === 5) {
        alert("You lose :(")
        playerScore = 0;
        computerScore = 0; 
        return;
    }
})

scissors.addEventListener('click', e => {
    playRound("scissors", computerPlay())
    if (playerScore === 5) {
        alert("WINNER!!!")
        playerScore = 0;
        computerScore = 0; 
        return;
    } else if (computerScore === 5) {
        alert("You lose :(")
        playerScore = 0;
        computerScore = 0; 
        return;
    }
})