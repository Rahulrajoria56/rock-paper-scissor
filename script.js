const resultDiv = document.querySelector('#result');
const humanScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const gameResultDiv = document.querySelector('#game-result');
const computerChoiceDiv = document.querySelector('#compchoice');
const button = document.querySelector('#button-container');

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      resultDiv.textContent = "Result: Draw!";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"
      || humanChoice == "paper" && computerChoice == "rock"
      || humanChoice == "scissors" && computerChoice == "paper") {
      resultDiv.textContent = `Result: You win! ${humanChoice} beats ${computerChoice}!`;
      return humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"
        || humanChoice == "rock" && computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "scissors"){
      resultDiv.textContent = `Result: You lose! ${computerChoice} beats ${humanChoice}!`;
      return computerScore++;
    }
}

function updateScores(){
    humanScoreDiv.textContent = `Your Score: ${humanScore} `;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = "Result:"
    gameResultDiv.textContent = "";
    computerChoiceDiv.textContent = "Computer Choice:";
    humanScoreDiv.textContent = `Your Score: ${humanScore} `;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

function checkWinner() {
    if  (humanScore > computerScore && humanScore + computerScore >= 5 ) {
        gameResultDiv.textContent = "you won the game! Game will restart in 3 seconds";
        setTimeout(resetGame, 3000);  
    }
    else if(humanScore < computerScore && humanScore + computerScore >= 5 ){
        gameResultDiv.textContent ="you lost the game! Game will restart in 3 seconds";
        setTimeout(resetGame, 3000);
    }
}

button.addEventListener('click', (Event) => {
    let userChoice;
    let compChoice = getComputerChoice(choices)
    let target = Event.target;
    switch(target.id) {
        case "rock":
            userChoice = "rock";
            break;
        case "paper":
            userChoice = "paper";
            break;
        case "scissor":
            userChoice = "scissors";
            break;
    }
    playRound(userChoice, compChoice);
    computerChoiceDiv.textContent = `Computer choice: ${compChoice}`;
    updateScores();
    checkWinner();
    
})