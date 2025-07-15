let userScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = 'green';
  }else{
    computerScore++;
    computerScoreDisplay.innerText = computerScore;
    console.log("You lose!");
    msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = 'red';
  }
}

const drawGame = () => {
  console.log('It\'s a tie!');
  msg.innerText = "It's a tie!";
  msg.style.backgroundColor = 'black';
}

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const playGame = (userChoice) => {
    console.log(userChoice, 'was clicked');
    const computerChoice = getComputerChoice();
    console.log(computerChoice, 'was clicked by computer');

    if (userChoice === computerChoice) {
        drawGame();
    }else{
      let userWin = true;
      if (userChoice === 'rock' && computerChoice === 'scissors') {
        userWin = true;
      }else if (userChoice === 'paper' && computerChoice === 'rock') {
        userWin = true;
      }else if (userChoice === 'scissors' && computerChoice === 'paper') {
        userWin = true;
      }else{
        userWin = false;
      }
      showWinner(userWin, userChoice, computerChoice);
    }
}

choice.forEach((choice) => {
    choice.addEventListener('click', () => {
      const userChoice = choice.getAttribute('id');
      playGame(userChoice);
    })
})