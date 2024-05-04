console.log("Hello World!");

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

let humanScore = 0;
let cpuScore = 0;

function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
        return "Tie";
    }
    else if (
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == rock)
    ){
        return "Player wins";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

console.log(humanScore);
console.log(cpuScore)


getHumanChoice();
getComputerChoice()