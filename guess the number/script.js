// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);

//  Steps :
// 1. Selected button using query selector
// 2. added addEventListener on that element to attach event handler and that event handler is that function.
// 3. name of the event is click as a first  argument and second argument is function
// 4. we don't call function anywhere we only define it and pass it to event handler but it is a js engine call that evfunctionent as soon as event happens.

//this will generated not include 20:

// const number = math.trunc(Math.random()*20);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent =
        'Enter Value to Proceed :('),
    );
  }
  else if (secretNumber == guess){
    document.querySelector('.message').textContent = '🎉 Correct Number';
    score--;
    document.querySelector('.score').textContent = score;

  }
  else if(secretNumber<guess){
    if(score>1){
        document.querySelector('.message').textContent='📈 Too High!'
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent='💥 You Lost the game '
    }
    
  }
  else if(secretNumber>guess){


  if(score>1){
    document.querySelector('.message').textContent='📉 Too Low!'
score--;
document.querySelector('.score').textContent = score;
}
else{
    document.querySelector('.message').textContent='💥 You Lost the game '
}
  }
  
 
});
