let board;
let rows;
let cols;
let scale = 10;

function start() {
  loop();
}

function pause() {
  noLoop();
}

function reset() {
  location.reload();
}

function setTheboard() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j] = floor(random(2));
    }
  }
}

function ifInsideBoard(nCol, nRow) {
  if (!(nCol < 0 || nCol >= cols) && !(nRow < 0 || nRow >= rows)) return true;
}

function createMatrix() {
  matrix = [...Array(cols).fill(0)].map(() => Array(rows).fill(0));
  return matrix;
}

function neighbors(col, row) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      sum += ifInsideBoard(col + i, row + j) ? board[col + i][row + j] : 0;
    }
  }
  return sum;
}

function mouseReleased() {
  x = floor(mouseX / scale);
  y = floor(mouseY / scale);
  if (ifInsideBoard(x, y)) {
    board[x][y] = 1;
    fill(255);
    stroke("#046307");
    rect(x * scale, y * scale - 1, scale - 1);
  }
}

function draw() {
  background("#046307");
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (board[i][j]) {
        fill(255);
        stroke("#046307");
        rect(i * scale, j * scale, scale - 1, scale - 1);
      }
    }
  }
  nextGeneration();
}

function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent("sketch-holder");
  cols = width / scale;
  rows = height / scale;
  board = createMatrix();
  defaultPattern();
  noLoop();
}

function changeState(col, row, count, next) {
  state = board[col][row];
  if (state == 1 && (count < 2 || count > 3)) next[col][row] = 0;
  else if (state == 0 && count == 3) next[col][row] = 1;
  else next[col][row] = state;
  return next;
}

function nextGeneration() {
  let next = createMatrix();
  for (col = 0; col < cols; col++) {
    for (row = 0; row < rows; row++) {
      let count = neighbors(col, row) - board[col][row];
      changeState(col, row, count, next);
    }
  }
  board = next;
}

function defaultPattern() {
  row = rows / 2 + 5;
  col = cols / 2 - 10;
  matrix[row + 1][col - 1] = 1;
  matrix[row][col - 1] = 1;
  matrix[row][col] = 1;
  matrix[row][col + 1] = 1;
  matrix[row - 1][col] = 1;
}
