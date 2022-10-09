const startGame = document.querySelector('.start-game');

// Game start event 
startGame.addEventListener('click', () => gameStart(options));

// Options Array
let options = [1, 2];

// Player name
let playerName;

// Game logic
function gameStart(range) {
  if (!playerName) playerName = prompt("Please enter your name", '');

  correctAnswer = Math.floor(Math.random() * range.length) + 1;

  userGuess = prompt(`PLAYER: ${playerName}      LEVEL: ${range.length - 1} \nGuess a number between 1 and ${range.length}.`, '');

  if (userGuess == correctAnswer) {
    alert('You got it right!');
    range.push(range.length + 1);
    gameStart(range);
  } else {
    options = [1, 2];
    alert('You Failed! Better luck next time.');
  }
}