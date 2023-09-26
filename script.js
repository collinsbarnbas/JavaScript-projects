'use strict';

let number = Math.floor(Math.random() * (20 - 1 + 1)) +1 ;
let count = 20;
let highScore =0; 
console.log(number);
function guessNumberFunct(){
    //generating randome number between 1 and 20 (including)
    //console.log(number);

    /*now we need to fetch the number from the input box
    and then check for some conditions*/

    //conditions
    //1 is too low the number hint, decrease score
    //2 is too high the number hint, decrease score
    //3 is right :- some conditions
    // message correct guess
    // page turns green
    // right number stored at ? place 
    // highscore is stored

    let guessNumber = Number(document.querySelector(".guess").value);
       if(guessNumber === 0){
        document.querySelector(".message").textContent ='⛔ No Number!';
       } 
       else if(number === guessNumber){
        document.querySelector(".message").textContent ='🎉 Correct Number!';
        document.querySelector('.number').textContent = guessNumber;
        document.querySelector('.score').textContent = count;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem'; 
        if(count > highScore){
            highScore = count;
            document.querySelector(".highscore").textContent=highScore;
        }
       }
       else if(guessNumber > number){
        if(count >0){
        count--;
        document.querySelector(".message").textContent ='👆 Too high!';
        document.querySelector('.score').textContent = count;
        }else{
            document.querySelector(".message").textContent ='🐸 Game Lost!';
        }
        //
       }
       else if(guessNumber < number){
        if(count >0){
        count--;
        document.querySelector(".message").textContent ='👇 Too Low! ';
        document.querySelector('.score').textContent = count;
        }else{
            document.querySelector(".message").textContent ='🐸 Game Lost!';
        }
       }

}

document.querySelector('.again').
addEventListener('click',
function(){
    document.querySelector(".message").textContent ='Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';
    count = 20;
    document.querySelector(".guess").value ='';
    document.querySelector('.score').textContent = count;
    number = Math.floor(Math.random() * (20 - 1 + 1)) +1 ;
});
//guessNumberFunct();