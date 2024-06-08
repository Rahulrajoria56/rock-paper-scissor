const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice(choice) {
  return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice() {
    return prompt('choose rock, paper or scissor ');
}
function playRound(computerChoice, humanChoice) {
if (computerChoice === 'rock' && humanChoice === 'paper') {
humanScore = ++humanScore;
console.log('You win');
} else if (computerChoice === 'rock' && humanChoice === 'rock') {
    console.log('It\'s a tie Play again');
} else if (computerChoice === 'rock' && humanChoice === 'scissor') {
    computerScore = ++computerScore;
    console.log('You lose Rock beats Scissor');
} else if (computerChoice === 'paper' && humanChoice === 'paper') {
    console.log('It\'s a tie Play again');
} else if (computerChoice === 'paper' && humanChoice === 'rock') {
    computerScore = ++computerScore;
    console.log('You lose Paper beats Rock');
} else if (computerChoice === 'paper' && humanChoice === 'scissor') {
    humanScore = ++humanScore;
    console.log('You win');
} else if (computerChoice === 'scissor' && humanChoice === 'paper') {
    computerScore = ++computerScore;
    console.log('You lose Scissor beats Paper');
} else if (computerChoice === 'scissor' && humanChoice === 'rock') {
    humanScore = ++humanScore;
    console.log('You win');
} else if (computerChoice === 'scissor' && humanChoice === 'scissor') {
    console.log('It\'s a tie Play again');
}
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for( let i = 0; i < 5; i++){
        let computerAnswerOne = getComputerChoice(choices);
        let humanAnswerOne = getHumanChoice();
        playRound(computerAnswerOne, humanAnswerOne);
        console.log(computerScore);
        console.log(humanScore);
        console.log(computerAnswerOne);
        console.log(humanAnswerOne);
    }
}
    
playGame();


if (humanScore > computerScore) {
    alert("you won your score: " + humanScore) 
}
else if(humanScore == computerScore){
    alert("it's a tie your score: " + humanScore)
}
else{
    alert("you lose your score: " + humanScore + " computer score: " + computerScore  )
}                                                                                     