// Refs
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choice = document.querySelector('#yourChoice'); 
const pcChoice = document.querySelector('#pcImg'); 
const human = document.querySelector('#humanScore');
const pc = document.querySelector('#pcScore');
const message =document.querySelector('#message');
const winner = document.querySelector('#winner');

// Computer Choice 
let computerAnswer;
function getComputerChoice (min,max){ 
    const minC= Math.ceil(min);
    const maxF= Math.floor(max);
    computerAnswer = Math.floor(Math.random()*(maxF-minC)+minC);
    return computerAnswer; 
}

// Ref scores
let tieScore=0;
let humanScore=0;
let computerScore=0;

let humanChoice; 

// Human Choice
function handleClick(event){
    const target = event.target; 
    
    
    if (target.tagName.toLowerCase() !== 'img') {
        return; 
    }
      
    document.querySelectorAll('#yourChoice img').forEach(item => {
        item.classList.remove('highlight');
    });
  
    
    target.classList.add('highlight');

    if (target.id === 'rock') {
        humanChoice = 0;
    } 
    else if (target.id === 'scissors') {
        humanChoice = 1;
    }
    else if (target.id === 'paper') {
        humanChoice = 2;
    } 
    
    console.log("You chose", target.id); 
    computerAnswer = getComputerChoice(0, 3);
    
    

    
    if (computerAnswer === 0){ 
        pcChoice.src="./media/rock.png";
        pcChoice.alt="rock";
    } else if (computerAnswer === 1){ 
        pcChoice.src="./media/scissors.png";
        pcChoice.alt="scissors";
    } else{ 
        pcChoice.src="./media/paper.png";
        pcChoice.alt="paper"; 
    } 
        
    
    if (humanChoice == 0 && computerAnswer == 1){
        message.textContent = " Rock beats scissors. 🎉"; 
        humanScore++;
    }else if (humanChoice == 1 && computerAnswer == 0){
        message.textContent = " Stone beats scissors. ";
        computerScore++;
    }else if (humanChoice == 0 && computerAnswer == 0){
        message.textContent = "Rock vs. rock - it's a tie!";
        tieScore++;
    }else if (humanChoice == 1 && computerAnswer == 1){
        message.textContent = "Scissors vs. scissors - it's a tie!";
        tieScore++; 
    }else if (humanChoice == 2 && computerAnswer == 0){
        message.textContent = "Paper beats rock. 🎉";
        humanScore++;
    }else if (humanChoice == 2 && computerAnswer == 1){
        message.textContent = "Scissors beat paper.";
        computerScore++;
    }else if (humanChoice == 0 && computerAnswer == 2){
        message.textContent = "Paper beats stone.";
        computerScore++;
    }else if (humanChoice == 1 && computerAnswer == 2){
        message.textContent = "Scissors beat paper. 🎉";
        humanScore++;
    }else if (humanChoice == 2 && computerAnswer == 2){
       message.textContent = "Paper vs. paper - it's a tie!";
        tieScore++; 
    } 
    
    human.textContent = humanScore;
    pc.textContent = computerScore;
           
    if (humanScore >= 5){
        winner.textContent = "YOU 🏆"; 
        choice.removeEventListener('click',handleClick);
    }else if (computerScore >= 5){
        winner.textContent = "PC 💻";
        choice.removeEventListener('click',handleClick);
    }
}

choice.addEventListener('click', handleClick);