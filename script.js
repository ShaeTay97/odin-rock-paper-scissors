console.log("Hello World!");

const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const cpu_choice = options[Math.floor(Math.random() * options.length)]; // makes getComputerChoice pick between 3 options randomly
    return console.log(cpu_choice);
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

let humanScore = 0;
let cpuScore = 0;

function playRound(humanSelection, computerSelection){
    //returns tie if the player and cpu pick the same option
    if (humanSelection === computerSelection){ 
        return "Tie";
    }
    //if player's option beats the CPU's then they win
    else if (
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    ){
        return `You win! ${humanSelection} beats ${computerSelection}`;
    }
    else { //any other outcome results in the cpu winning.
        return `You lose! ${computerSelection} beats ${humanSelection}`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))

console.log(humanScore);
console.log(cpuScore)


getHumanChoice();
getComputerChoice()