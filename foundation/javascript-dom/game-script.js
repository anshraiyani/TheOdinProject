
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultbox = document.getElementById('resultbox')
const playerbox = document.getElementById('playerScore');
const computerbox = document.getElementById('computerScore');

let playerScore=0;
let computerScore=0;

rockBtn.addEventListener('click', ()=>{ return handleClick("rock")});
paperBtn.addEventListener('click', ()=>{ return handleClick("paper")});
scissorsBtn.addEventListener('click', ()=>{ return handleClick("scissors")});

const choiceArray = ["rock","paper","scissors"];

function handleClick(playerchoice){
    let result=singleRound(playerchoice);
    updateScore(result);

    if(endGame()){
        window.alert(endMessage());
        return;
    }
}

function endGame(){
    return playerScore == 5 || computerScore == 5;
}

function updateScore(result){
    if(result == "tie"){
        resultbox.textContent='Tie';
    }
    else if(result == "lose"){
        resultbox.textContent='You Lose';
    }
    else resultbox.textContent='You Win';

    playerbox.textContent=playerScore;
    computerbox.textContent=computerScore;
}

function endMessage(){
    if(playerScore>computerScore) {
        return "You Won!";
    }
    return "You Lose!";
}

function getComputerChoice(){
    return choiceArray[~~(Math.random() * choiceArray.length)];
}

function singleRound(playerSelection,computerSelection){
    computerSelection=getComputerChoice().toLowerCase();
    playerSelection=playerSelection.toLowerCase();
    if(computerSelection == playerSelection){
        return "tie";
    }
    else if( (computerSelection == "rock" && playerSelection == "scissors") ||
             (computerSelection == "rock" && playerSelection == "paper") ||
             (computerSelection == "paper" && playerSelection == "rock")){
                computerScore++;
                return "lose"
    }
    else{
        playerScore++;
        return "win";
    }
}
