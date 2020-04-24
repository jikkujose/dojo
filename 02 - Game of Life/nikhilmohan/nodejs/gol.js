let n = 1000
let boards,
  board,
  boardIndex = 0

function emptyBoard(rows, columns) {
  return Array(rows + 2)
    .fill()
    .map(() => Array(columns + 2).fill(0))
}

function randomBoard(rows, columns) {
  let board = emptyBoard(rows, columns)

  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++)
      board[y + 1][x + 1] = Math.floor(Math.random() * 2)

  return board
}

function iterate() {
  let b = boards[boardIndex]
  let nb = boards[(boardIndex + 1) % 2]

  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= n; x++) {
      let neighbors =
        b[y - 1][x - 1] +
        b[y - 1][x] +
        b[y - 1][x + 1] +
        b[y][x - 1] +
        b[y][x + 1] +
        b[y + 1][x - 1] +
        b[y + 1][x] +
        b[y + 1][x + 1]

      let a = 0

      if (b[y][x] == 0) {
        if (neighbors == 3) a = 1
      } else {
        if (neighbors == 2 || neighbors == 3) a = 1
      }

      nb[y][x] = a
    }
  }

  return (boardIndex + 1) % 2
}

function f(x) {
  boards = [randomBoard(n, n), emptyBoard(n, n)]

  let t = Date.now()

  for (let i = 0; i < x; i++) {
    boardIndex = iterate()
  }

  t = Date.now() - t
  console.log(t / x)
}

f(1000)
