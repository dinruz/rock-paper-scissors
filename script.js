
// Computer choice 

let computerAnswer;
function getComputerChoice (min,max){
    
    const minC= Math.ceil(min);
    const maxF= Math.floor(max);
    computerAnswer = Math.floor(Math.random()*(maxF-minC)+minC);
    return computerAnswer; 
}

// Human choice 

let humanAnswer;
function getHumanChoice(){
    const sign=prompt("Choose rock, paper or scissors:");
    
    if ((sign.toLowerCase())=="rock"){
        console.log("You: rock");
        humanAnswer = 0;
    }
    else if ((sign.toLowerCase())=="scissors"){
        console.log("You: scissors");
        humanAnswer = 1;
       
    }
    else if((sign.toLowerCase())=="paper"){
        console.log("You: paper");
        humanAnswer = 2;
    }
    else{
        console.log( `You: ${sign} - Hey, that's not a sign!`);
        humanAnswer = 3;
    }
return humanAnswer;
}

// play single round 

let humanScore=0;
let computerScore=0;
let tieScore=0;

function playRound (humanChoice,computerChoice){
    if (humanChoice == 0 && computerChoice == 1){
        console.log ("Rock beats scissors. YOU WIN!");
        humanScore++;
    }
     else if (humanChoice == 1 && computerChoice == 0){
        console.log ("Rock beats scissors. YOU LOOSE!");
        computerScore++;
    }
    else if (humanChoice == 0 && computerChoice == 0){
        console.log ("Rock vs. rock - TIE!");
        tieScore++;
    }
    else if (humanChoice == 1 && computerChoice == 1){
         console.log("Scissors vs. scissors - TIE!");
         tieScore++;
    }
    else if (humanChoice == 2 && computerChoice == 0){
        console.log("Paper beats rock. YOU WIN!");
        humanScore++;
    }
    else if (humanChoice == 2 && computerChoice == 1){
        console.log("Scissors beat paper. YOU LOOSE!");
        computerScore++;
    }
    else if (humanChoice == 0 && computerChoice == 2){
        console.log("Paper beats rock. YOU LOOSE!");
        computerScore++;
    }
    else if (humanChoice == 1 && computerChoice == 2){
        console.log("Scissors beat paper. YOU WIN!");
        humanScore++;
    }
    else if (humanChoice == 2 && computerChoice == 2){
        console.log("Paper vs. paper - TIE!");
        tieScore++;
    }
    else if (humanChoice == 3){
        console.log("INVALID ROUND.");

    }
}

function playGame(){
    let round;
    for (round=1; round < 6; round++){
        console.log("Round: ", round);
        getHumanChoice();
        getComputerChoice(0,3);
         if (computerAnswer === 0){        
                console.log ("Computer: rock");
         }
         else if (computerAnswer === 1){
                console.log ("Computer: scissors");
        }
         else{
                console.log("Computer: paper");
        }    
        
playRound (humanAnswer,computerAnswer);
}
console.log ("RESULTS OF THE GAME");
console.log("Human: ", humanScore, " Computer: ", computerScore, " Tie: ", tieScore)

// Winner

if (humanScore > computerScore) {
    console.log ( "YOU ARE THE WINNER OF THE GAME!");
}
else if (computerScore > humanScore){
    console.log("COMPUTER IS THE WINNER OF THE GAME!");
}
else {
    console.log ("THERE'S NO WINNER! (Ended in a draw.)");
}
}
playGame();