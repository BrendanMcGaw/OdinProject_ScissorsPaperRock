let scissors = 0;
let paper = 1;
let rock = 2;
let playerScore = null;
let computerScore = null;

function getComputersChoice() {
    numericalResult = (Math.floor(Math.random() * 3));
    if (numericalResult == 0) {
        console.log("The computer has chosen Scissors")
        result = "scissors";
    }
    else if (numericalResult == 1) {
        console.log("The computer has chosen Paper.")
        result = "paper";
    }
    else {
        console.log("The computer has chosen Rock.")
        result = "rock";
    }
    return result;
}

function getPlayersChoice() {
    playersChoice = prompt("Please choose scissors, paper or rock.");
    return playersChoice.toLowerCase()
}

function playARound() {
    computersChoice = getComputersChoice();
    playersChoice = getPlayersChoice();
    console.log(computersChoice);
    console.log(playersChoice);
}