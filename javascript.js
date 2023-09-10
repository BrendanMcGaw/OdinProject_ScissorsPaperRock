let Scissors = 0;
let Paper = 1;
let Rock = 2;


function getComputerChoice() {
    result = (Math.floor(Math.random() * 3));
    if (result == 0) {
        console.log("The computer has chosen Scissors")
    }
    else if (result == 1) {
        console.log("The computer has chosen Paper.")
    }
    else {
        console.log("The computer has chosen Rock.")
    }
    return result;
}