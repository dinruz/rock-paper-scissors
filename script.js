
// Computer choice 

let computerAnswer;
function getComputerChoice (min,max){
    
    const minC= Math.ceil(min);
    const maxF= Math.floor(max);
    computerAnswer = Math.floor(Math.random()*(maxF-minC)+minC);
    return computerAnswer; 
}

getComputerChoice(0,3);
    if (computerAnswer === 0){
        console.log (" Computer: 'Rock!'");
    }
    else if (computerAnswer === 1){
        console.log ("Computer: 'Scissors!'");
    }
    else{
    console.log("Computer: 'Paper!'");
}

// Human choice //

let humanAnswer;
function getHumanChoice(){
    const sign=prompt("Choose rock, paper or scissors:");
    
    if ((sign.toLowerCase())=="rock"){
        console.log("You chose rock.");
        humanAnswer = 0;
    }
    else if ((sign.toLowerCase())=="scissors"){
        console.log("You chose scissors.");
        humanAnswer = 1;
       
    }
    else if((sign.toLowerCase())=="paper"){
        console.log("You chose paper.");
        humanAnswer = 2;
    }
    else{
        console.log("Invalid sign!");
    }
return humanAnswer;
}
getHumanChoice();

// Round 

let humanScore=0;
let computerScore=0;

function playRound (humanChoice,computerChoice){
    if (humanChoice == 0 && computerChoice == 1){
        console.log ("Rock beats scissors. You WIN!");
        humanScore++;
    }
     else if (humanChoice == 1 && computerChoice == 0){
        console.log ("Rock beats scissors. You LOOSE!");
        computerScore++;
    }
    else if (humanChoice == 0 && computerChoice == 0){
        console.log ("Rock vs. rock...TIE!");
    }
    else if (humanChoice == 1 && computerChoice == 1){
         console.log("Scissors vs. scissors...TIE!");
    }
    else if (humanChoice == 2 && computerChoice == 0){
        console.log("Paper beats rock. You WIN!");
        humanScore++;
    }
    else if (humanChoice == 2 && computerChoice == 1){
        console.log("Scissors beat paper. You LOOSE!");
        computerScore++;
    }
    else if (humanChoice == 0 && computerChoice == 2){
        console.log("Paper beats rock. You LOOSE!");
        computerScore++;
    }
    else if (humanChoice == 1 && computerChoice == 2){
        console.log("Scissors beat paper.You WIN!");
        humanScore++;
    }
    else if (humanChoice == 2 && computerChoice == 2){
        console.log("Paper vs. paper - TIE!");
    }
    else{
        console.log("Invalid input.");
    }
console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);
}

playRound (humanAnswer,computerAnswer);









