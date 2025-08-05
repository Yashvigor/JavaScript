const grid = document.getElementById('sudokuGrid');
const inputs = [];

let timerInterval;
let secondsElapsed = 0;

for (let i = 0; i < 81; i++) {
  const input = document.createElement('input');
  input.type = 'number';
  input.min = 1;
  input.max = 9;
  input.classList.add('sudoku-cell');
  inputs.push(input);
  grid.appendChild(input);
}

function getGridValues() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const idx = i * 9 + j;
      const val = parseInt(inputs[idx].value);
      row.push(isNaN(val) ? 0 : val);
    }
    grid.push(row);
  }
  return grid;
}

function validateSudoku() {
  const grid = getGridValues();
  let isValidSolution = true;
  inputs.forEach(cell => cell.classList.remove('invalid'));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = grid[i][j];
      if (val < 1 || val > 9 || !isValid(i, j, grid)) {
        inputs[i * 9 + j].classList.add('invalid');
        highlightConflicts(i, j, grid, val);
        isValidSolution = false;
      }
    }
  }

  const result = document.getElementById('result');
  if (isValidSolution) {
    result.textContent = "✅ Valid Solution";
    result.style.color = "green";
    stopTimer();
  } else {
    result.textContent = "❌ Invalid Solution";
    result.style.color = "red";
    stopTimer();
  }
}

function isValid(row, col, grid) {
  const val = grid[row][col];

  for (let j = 0; j < 9; j++) {
    if (j !== col && grid[row][j] === val) return false;
  }

  for (let i = 0; i < 9; i++) {
    if (i !== row && grid[i][col] === val) return false;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if ((i !== row || j !== col) && grid[i][j] === val) return false;
    }
  }

  return true;
}

function highlightConflicts(row, col, grid, val) {
  for (let j = 0; j < 9; j++) {
    if (j !== col && grid[row][j] === val) {
      inputs[row * 9 + j].classList.add('invalid');
    }
  }

  for (let i = 0; i < 9; i++) {
    if (i !== row && grid[i][col] === val) {
      inputs[i * 9 + col].classList.add('invalid');
    }
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if ((i !== row || j !== col) && grid[i][j] === val) {
        inputs[i * 9 + j].classList.add('invalid');
      }
    }
  }
}

function resetGrid() {
  inputs.forEach(cell => {
    if (!cell.classList.contains('locked')) {
      cell.value = '';
      cell.disabled = false;
    }
    cell.classList.remove('invalid', 'locked');
  });
  document.getElementById('result').textContent = '';
  stopTimer();
  secondsElapsed = 0;
  updateTimerDisplay();
}

function loadPuzzle() {
  const sample = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  for (let i = 0; i < 81; i++) {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const val = sample[row][col];
    if (val !== 0) {
      inputs[i].value = val;
      inputs[i].disabled = true;
      inputs[i].classList.add('locked');
    } else {
      inputs[i].value = '';
      inputs[i].disabled = false;
      inputs[i].classList.remove('locked');
    }
    inputs[i].classList.remove('invalid');
  }

  document.getElementById('result').textContent = '';
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  secondsElapsed = 0;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
  const secs = String(secondsElapsed % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `⏱️ ${mins}:${secs}`;
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('themeToggle').checked = true;
  }
  document.getElementById('themeToggle').addEventListener('change', toggleTheme);
};
