const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const getHumanChoice = () => {
    let humanChoice;
    while (true) {
        humanChoice = window.prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            break;
        } else {
            window.alert("Invalid choice choose rock, paper, or scissors")
        }
    }
    return humanChoice;
}

const playGame = () => {
    let humanScore = 0
    let computerScore = 0
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            return "Its a tie!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++
            return `You win! ${humanChoice} beats ${computerChoice}`
        } else {
            computerScore++
            return `You lose! ${computerChoice} beats ${humanChoice}`
        }
    }
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`)
}


playGame();