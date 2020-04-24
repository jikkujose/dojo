let n = 1000
let boards,
  board,
  boardIndex = 0

function emptyBoard(rows, columns) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill(0))
}

function randomBoard(rows, columns) {
  let board = emptyBoard(rows, columns)

  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) board[y][x] = Math.floor(Math.random() * 2)

  return board
}

function iterate() {
  let b = boards[boardIndex]
  let nb = boards[(boardIndex + 1) % 2]

  let by, bx
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      let neighbors = 0

      for (let j = -1; j < 2; j++) {
        for (let i = -1; i < 2; i++) {
          bx = x + i
          by = y + j
          if ((i != 0 || j != 0) && bx > 0 && by > 0 && bx < n && by < n)
            neighbors += b[by][bx]
        }
      }

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
