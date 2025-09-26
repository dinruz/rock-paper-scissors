// Refs
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Computer choice 

let computerAnswer;
function getComputerChoice (min,max){    
    const minC= Math.ceil(min);
    const maxF= Math.floor(max);
    computerAnswer = Math.floor(Math.random()*(maxF-minC)+minC);
    return computerAnswer; 
}

// Human Choice

rock.addEventListener('click', ()=> {
    console.log("You: rock");
    humanAnswer = 0;
    computerAnswer = getComputerChoice(0, 3);
    playRound(humanAnswer,computerAnswer);
});

scissors.addEventListener('click', ()=> {
    console.log("You: scissors");
    humanAnswer=1; 
    computerAnswer = getComputerChoice(0, 3);
    playRound(humanAnswer,computerAnswer);
});

paper.addEventListener('click', ()=> {
    console.log("You: paper");
    humanAnswer = 2;
    computerAnswer = getComputerChoice(0, 3);
    playRound(humanAnswer,computerAnswer)
});


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
    /*for (round=1; round < 6; round++){ */ // ukloni ovo do 5 rundi
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

playGame();