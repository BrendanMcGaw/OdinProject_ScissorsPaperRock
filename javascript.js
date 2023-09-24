let scissors = 0;
let paper = 1;
let rock = 2;
let playersChoice = null;
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

document.getElementById("Scissors").addEventListener("click", () => {
    playARound("scissors");
});
document.getElementById("Paper").addEventListener("click", () => {
    playARound("paper");
});
document.getElementById("Rock").addEventListener("click", () => {
    playARound("rock")
})
// document.getElementById("Paper").addEventListener("click", getPlayersChoice());
// document.getElementById("Rock").addEventListener("click", getPlayersChoice());
// console.log(getPlayersChoice);

// function getPlayersChoice() {
//     return playersChoice.toLowerCase()
// }

// This function plays a round of the game and determines a victor.
function playARound(playersChoice) {
    computersChoice = getComputersChoice();
    console.log(computersChoice);
    console.log(playersChoice);
// These 3 if statements declare the player the winner and give the player a point if the conditions are met.
    if (playersChoice == "scissors" && computersChoice == "paper") {
        console.log("The player has won this round!");
        ++playerScore;
    }
    else if (playersChoice == "paper" && computersChoice == "rock") {
        console.log("The player has won this round!");
        ++playerScore;
    }
    else if (playersChoice == "rock" && computersChoice == "scissors") {
        console.log("The player has won this round!");
        ++playerScore;
    }
// These 3 if statements declare the computer the winner and give the computer a point if the conditions are met.
    else if (playersChoice == "scissors" && computersChoice == "rock") {
        console.log("The computer has won this round!");
        ++computerScore;
    }
    else if (playersChoice == "paper" && computersChoice == "scissors") {
        console.log("The computer has won this round!");
        ++computerScore;
    }
    else if (playersChoice == "rock" && computersChoice == "paper") {
        console.log("The computer has won this round!");
        ++computerScore;
    }
// This else declares the round was a draw.
    else {
        console.log("This round was a draw. No points awarded.");
    }
}
// function game() {
//     // This is not working as intended, computer score at 5 or above is not stopping the run.
//     // it would appear that its waiting until both numbers are ABOVE 5 before it stops running
//     while (playerScore < 5 && computerScore < 5) {
//         playARound();
//         console.log(playerScore);
//         console.log(computerScore);
//     }

//     if (playerScore == 5) {
//         alert("The player has won the game! Congratulations");
//     }

//     else if (computerScore == 5) {
//         alert("The computer has risen up and stolen victory! Commiserations!");
//     }
//     console.log("The final score was:");
//     console.log(playerScore + " scored by the player.");
//     console.log(computerScore + " scored by the computer.");
// }