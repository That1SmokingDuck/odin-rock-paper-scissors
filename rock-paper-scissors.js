
let playerScore = 0;
let computerScore = 0;



function game(){

    let numRound = getNumberOfRounds();
    let i = 0;
    while(i < numRound){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        singleRound(playerSelection, computerSelection);
        i++;
    
    }
    if (playerScore > computerScore){
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}. You win!!!`);
    }
    else{
        console.log(`Your score: ${playerScore}. Computer score: ${computerScore}. You loose!!!`);
    }
}

function singleRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection)
    {
        console.log("It's a tie");
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "scissors" && computerSelection === "paper") || 
             (playerSelection === "paper" && computerSelection === "rock"))
    {
        playerScore++;
        console.log(`Your ${playerSelection} beat(s) the computer's ${computerSelection}. You win this round.`); 
    }
    else
    {
        computerScore++;
        console.log(`The computer's ${computerSelection} beat(s) your ${computerSelection}. You loose this round.`);
    }

}

function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * 3);
    
    switch(computerNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
      }
}

function getPlayerChoice(){
    let playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors"){
        return playerInput;
    } else {
        getPlayerChoice();
    }
}

function getNumberOfRounds(){
    let playerInput = parseInt(prompt("How many rounds would you like to play? (enter a number between 1 and 10"));
    if (playerInput !== isNaN && ((playerInput > 0) && (playerInput <= 10)))
    {
        return playerInput;
    }
    else
    {
        getNumberOfRounds();
    }
}






 