'use strict';

const randNum = function () {
  //this fuction generates random integer number between 1 and 20
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = randNum();

let score = 20;
let highScore = 0;

const textContent = function (selector, text) {
  // this function gets selector and the text and puts it in query selector
  document.querySelector(selector).textContent = text;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //when there is no input
    textContent('.message', '⛔ No Number!');
  } else if (guess === secretNumber) {
    //When player wins
    textContent('.message', '🎉 Correct Number!');
    textContent('.number', secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      textContent('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      textContent('.score', score);
    } else {
      textContent('.message', '💥 You lost the game!');
      textContent('.score', --score);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  // this event handler resets the game except the high score
  score = 20;
  secretNumber = randNum();
  textContent('.message', 'Start guessing...');
  textContent('.score', score);
  textContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
