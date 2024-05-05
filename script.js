const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const cpu_choice = options[Math.floor(Math.random() * options.length)]; // makes getComputerChoice pick between 3 options randomly
    return cpu_choice;
}


function getHumanChoice(){ 
    let validatedInput = false;
    while (validatedInput == false){
    const choice = prompt("Rock, Paper or Scissors?");
    if(choice == null){
        continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower
    } 
    }   
}



function playRound(humanSelection, computerSelection){
    //returns tie if the player and cpu pick the same option
    if (humanSelection === computerSelection){ 
        alert ("It's a Tie! No one wins!");
    }
    //if player's option beats the CPU's then they win
    else if (
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    ){
        humanScore++;
        alert (`You win! ${humanSelection} beats ${computerSelection}`);
    }
    else { //any other outcome results in the cpu winning.
        cpuScore++;
        alert (`You lose! ${computerSelection} beats ${humanSelection}`);
    }
}

    let humanScore = 0;
    let cpuScore = 0;

function playGame(){
    console.log("Welcome!");
    for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
    console.log("Player Score:", humanScore);
    console.log("CPU Score:", cpuScore);
    }
    console.log("Game Over");
    if (humanScore > cpuScore){
        alert ("You win!")
    } else {
        alert ("You Lose")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));



console.log(playGame());