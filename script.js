'use strict';
const message = document.querySelector('.message');
const number = document.querySelector('.number');// we will display number uisng this number varibale
// console.log(score.textContent);
let score=5;
let highScore=0;
// generating random number
let secret_number = Math.trunc(Math.random()*20)+1;

//adding event listener for check button
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    if(!guess){
        message.textContent="😒 No Number!";
    }
    else if(guess === secret_number){
        message.textContent="😛 correct number";
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width="30rem";
        number.textContent=secret_number;
       if (score>highScore){
           highScore=score;
        document.querySelector('.highscore').textContent=highScore;
       }
    } 
    else if(guess> secret_number){
        message.textContent="🤦‍♂️ number is too high";
        (score>1) ? countdown() : lostMessage();
    }else if(guess<secret_number){
        message.textContent="😢 number is too low";
        (score>1)? countdown():lostMessage();
        
    }
})
//adding event listener to the again button 
document.querySelector(".again").addEventListener('click', function(){
playGameAgain();
});



// all main function be care full with these funcitons
function countdown(){
    score--;
    document.querySelector('.score').textContent=score;
}
function lostMessage(){
    message.textContent="😕 you lost the game"
    document.querySelector('.score').textContent=0;
    
}
function playGameAgain(){
    score=5;
    secret_number = Math.trunc(Math.random()*20)+1;
    message.textContent="Start guessing"
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width="15rem";
    // document.querySelector('.number').textContent=secret_number;
    number.textContent="?";
    document.querySelector('.guess').value='';
   
}
 