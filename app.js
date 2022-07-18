const playingTo = document.querySelector('#score-select');
const scoreOne = document.querySelector('.score-one');
const scoreTwo = document.querySelector('.score-two');
const playerOne = document.querySelector('.player-one');
const playerTwo = document.querySelector('.player-two');
const reset = document.querySelector('.reset');

playerOne.addEventListener('click', function () {
  const newScore = parseInt(scoreOne.innerText) + 1;
  scoreOne.innerText = newScore;
  checkGameFinished(newScore);
});

playerTwo.addEventListener('click', function () {
  const newScore = parseInt(scoreTwo.innerText) + 1;
  scoreTwo.innerText = newScore;
  checkGameFinished(newScore);
});

reset.addEventListener('click', function () {
  scoreOne.innerText = 0;
  scoreTwo.innerText = 0;
  playerOne.removeAttribute('disabled');
  playerTwo.removeAttribute('disabled');
  scoreOne.style.color = 'black';
  scoreTwo.style.color = 'black';
});

function checkGameFinished(num) {
  const maxPoint = playingTo.value;
  if (num == maxPoint) {
    gameOver();
  }
}

function gameOver() {
  playerOne.setAttribute('disabled', '');
  playerTwo.setAttribute('disabled', '');
  if (scoreOne.innerText == playingTo.value) {
    scoreOne.style.color = 'green';
  } else {
    scoreOne.style.color = 'red';
  }
  if (scoreTwo.innerText == playingTo.value) {
    scoreTwo.style.color = 'green';
  } else {
    scoreTwo.style.color = 'red';
  }
}
