const cells = document.querySelectorAll('.cell');
const statusDiv = document.getElementById('status');
const restartBtn = document.getElementById('restart');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes('') ? null : 'draw';
}

function updateStatus() {
  const winner = checkWinner();
  if (winner === 'draw') {
    statusDiv.textContent = "It's a draw!";
    gameActive = false;
  } else if (winner) {
    statusDiv.textContent = `Player ${winner} wins!`;
    gameActive = false;
  } else {
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function handleCellClick(e) {
  const idx = +e.target.dataset.index;
  if (!gameActive || board[idx]) return;
  board[idx] = currentPlayer;
  e.target.textContent = currentPlayer;
  updateStatus();
  if (gameActive) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
  }
}

function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  cells.forEach(cell => cell.textContent = '');
  updateStatus();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);

updateStatus(); 