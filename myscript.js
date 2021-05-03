function game() {
   return(playRound + playRound + playRound + playRound + playRound)
   }
   let playerScore = 0
   let computerScore = 0
   let moves = ["rock", "paper", "scissors"]
    function computerPlay() {
        return moves[Math.floor(Math.random() * 3)];
    }
    let computerSelection = computerPlay();


    let playerInput = prompt("What is your move?");
    let playerSelection = playerInput.toLowerCase();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            ++playerScore
            return("You win! Rock beats scissors.")
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            ++playerScore
            return("You win! Paper beats rock.");
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            ++playerScore
            return("You win! Scissors beat paper.")
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            ++computerScore
            return("You lose! Rock beats scissors")
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            ++computerScore
            return("You lose! Paper beats rock")
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            ++computerScore
            return("You lose! Scissors beat paper")
        }
        else return("Draw!")
    }
console.log(playRound(playerSelection, computerSelection))
console.log(playerScore)
console.log(computerScore)
