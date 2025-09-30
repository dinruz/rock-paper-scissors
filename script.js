// Refs

const choice = document.querySelector('#yourChoice'); 
const pcChoice = document.querySelector('#pcImg'); 
const human = document.querySelector('#humanScore');
const pc = document.querySelector('#pcScore');
const message =document.querySelector('#message');
const winner = document.querySelector('#winner');
const round = document.querySelector('#count');
const newGame = document.querySelector('#newGame')
const funfact =document.querySelector('#funfact');

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
let count= 0; 

let humanChoice; 

// Human Choice

function handleClick(event){
    const target = event.target;     
    
    if (target.tagName !== 'IMG') {
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
     computerAnswer = getComputerChoice(0, 3);
      
        if (computerAnswer === 0){ 
        pcChoice.src="./assets/media/rock.png";
        pcChoice.alt="rock";
    } else if (computerAnswer === 1){ 
        pcChoice.src="./assets/media/scissors.png";
        pcChoice.alt="scissors";
    } else{ 
        pcChoice.src="./assets/media/paper.png";
        pcChoice.alt="paper"; 
    }         
  
    if (humanChoice == 0 && computerAnswer == 1){
        message.textContent = " Rock beats scissors. You won. ✔️"; 
        humanScore++;
        count++;
    }else if (humanChoice == 1 && computerAnswer == 0){
        message.textContent = " Stone beats scissors. You lost. ❌ ";
        computerScore++;
        count++;
    }else if (humanChoice == 0 && computerAnswer == 0){
        message.textContent = "Rock vs. rock - it's a TIE. 🤝";
        tieScore++;
        count++;
    }else if (humanChoice == 1 && computerAnswer == 1){
        message.textContent = "Scissors vs. scissors - it's a TIE. 🤝";
        tieScore++; 
        count++;
    }else if (humanChoice == 2 && computerAnswer == 0){
        message.textContent = "Paper beats rock. You won.✔️";
        humanScore++;
        count++;
    }else if (humanChoice == 2 && computerAnswer == 1){
        message.textContent = "Scissors beat paper. You lost. ❌";
        computerScore++;
        count++;
    }else if (humanChoice == 0 && computerAnswer == 2){
        message.textContent = "Paper beats stone. You lost. ❌";
        computerScore++;
        count++;
    }else if (humanChoice == 1 && computerAnswer == 2){
        message.textContent = "Scissors beat paper. You won.✔️";
        humanScore++;
        count++;
    }else if (humanChoice == 2 && computerAnswer == 2){
       message.textContent = "Paper vs. paper - it's a TIE. 🤝";
        tieScore++; 
        count++;
    } 
    
    human.textContent = humanScore;
    pc.textContent = computerScore;
    round.textContent = count;

if (humanScore >= 5){
        winner.textContent = "YOU 🏆"; 
        pcChoice.src="./assets/media/pc-loose.avif";
        pcChoice.alt = "PC loose";     
        choice.removeEventListener('click',handleClick);
 }else if (computerScore >= 5){
        winner.textContent = "PC 💻";
        pcChoice.src="./assets/media/pc-won.jpeg";
        pcChoice.alt = "PC won";      
        choice.removeEventListener('click',handleClick);
    }

 setTimeout(() => {
        if (humanScore < 5 && computerScore < 5) {
            pcChoice.src="./assets/media/pc.gif";
            pcChoice.alt = "?";
        }  
    }, 1200); // 1.2 sec
}

// New Game Functionality

function start(){
    humanScore=0;
    computerScore=0;
    count=0;
    message.textContent="";
    round.textContent="1";
    human.textContent="0";
    pc.textContent="0";
    winner.textContent="?";
    pcChoice.src="./assets/media/pc.gif";
    pcChoice.alt = "?";
    funfact.textContent = "Reveal Funfact 💡";

    choice.addEventListener('click', handleClick); 
}

// Fun Fact Functionality

 let facts =[
    "It's the oldest hand game in the world ✌️ and probably originates from China.",
    "The earliest known mention of a game used animals like the frog, slug and snake. 🐸",
    "✊ Rock is the most common oppening move (around 35% of the time).",
    " ⛩️ Japanese name of the game is 'Jankenpon' and on the US West Coast it's 'Roshambo'.",
    "Women are more likely to throw ✂️ as their opening move than men are.",
    "In many parts of East Asia, Paper actually represents a Cloth or Bag. 👜 ",
    "'The Big Bang Theory' created variant with 2 more shapes - Lizard 🦎 and Spock.🖖 ",
];
 let randomFact;
 function getRandomFacts(){
    let randomNo = Math.floor(Math.random() * 7);
    randomFact = facts[randomNo]; 
    funfact.textContent = randomFact;
 return randomFact;
}
choice.addEventListener('click', handleClick); 
newGame.addEventListener('click',start);
funfact.addEventListener('click',getRandomFacts);