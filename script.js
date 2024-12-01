function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
};

function getHumanChoice() {
    let option = prompt("What's your move?");

    return option;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Thats a tie!");
    } else if ((humanChoice === "Scissors" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors")) {
        console.log(`You Won, ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    } else {
        console.log(`You Lose, ${humanChoice} loses to ${computerChoice}`);
        computerScore += 1;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
        console.log("SCORES:")
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
    if (humanScore > computerScore) {
        console.log("YOU WON!")
    } else {
        console.log("YOU LOSE!")
    }
}

playGame()