const startGame = document.querySelector('.start-game');

// Game start event 
startGame.addEventListener('click', () => gameStart(options));

// Options Array
let options = [1, 2];

// Player name
let playerName;

// Game logic
function gameStart(range) {
  // copy range to avoid side effect
  let innerRange = [...range];

  if (!playerName) playerName = prompt("Please enter your name", '');

  // get random number from range
  correctAnswer = Math.floor(Math.random() * innerRange.length) + 1;

  // Log next answer
  console.log(`Next answer is ${correctAnswer}`)
  
  userGuess = prompt(`PLAYER: ${playerName}      LEVEL: ${innerRange.length - 1} \nGuess a number between 1 and ${innerRange.length}.`, '');

  if (userGuess == correctAnswer) {
    alert('You got it right!');

    // increase range
    innerRange.push(innerRange.length + 1);

    gameStart(innerRange);
  } else {
    alert('You Failed! Better luck next time.');

    // reset range
    innerRange = [1, 2];
  }
}