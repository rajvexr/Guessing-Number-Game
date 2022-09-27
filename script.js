'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (text) {
  document.querySelector('.score').textContent = text;
};

const displayHighscore = function (text) {
  document.querySelector('.highscore').textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Answer');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.question').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage('📈 Number is high');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over, you lost 😢');
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage('📉 Number is low');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over, you lost 😢');
      document.querySelector('body').style.backgroundColor = 'rgb(99, 0, 0)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.question').style.width = '15rem';
  displayScore(score);
  displayMessage('Start Guessing...');
  document.querySelector('.question').textContent = '?';
  document.querySelector('.guess').value = '';
});
