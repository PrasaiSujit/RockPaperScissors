let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
let result = document.querySelector('#msg');


let genCompChoice = ()=>{
    let option = ['rock','paper','scissor'];
    let ranIdx = Math.floor(Math.random()*3);
    return option[ranIdx];
}

let drawGame = ()=>{
    result.innerText = 'Game draw. Play again';
    result.style.backgroundColor = '#081b31';
}

let gameWinner = (userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        result.innerText = `You win! ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = 'green';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        result.innerText = `You lost ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = 'red';
    }
}
let playGame = (userChoice)=>{
    let compChoice = genCompChoice();
    if(userChoice === compChoice){
      drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === 'rock'){
            userwin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            userwin = compChoice === 'scissor' ? false : true;
        }
        else{
            userwin = compChoice === 'rock' ? false : true;
        }
        gameWinner(userwin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
 choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute('id');
    playGame(userChoice);
 })
})
