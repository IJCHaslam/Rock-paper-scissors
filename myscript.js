let moves = ["Rock", "Paper", "Scissors"]
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}
console.log(computerPlay())