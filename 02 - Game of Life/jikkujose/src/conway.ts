import { getTwoDArray } from "./utils"

export const conway = board => {
  const xCellCount = board[0].length
  const yCellCount = board.length

  const nextBoard = getTwoDArray(xCellCount, yCellCount)

  for (let x = 0; x < xCellCount; x++) {
    for (let y = 0; y < yCellCount; y++) {
      nextBoard[y][x] = willCellLive(board, x, y)
    }
  }

  return nextBoard
}

export const willCellLive = (board, x, y) => {
  const isCurrentCellAlive = board[y][x]

  switch (liveCellsCount(board, x, y)) {
    case 0:
      return false
    case 1:
      return false
    case 2:
      const result = isCurrentCellAlive ? true : false
      return result
    case 3:
      return true
    default:
      return false
  }
}

export const liveCellsCount = (board, x, y) => {
  const addresses = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  let count = 0

  addresses.forEach(([_x, _y]) => {
    const nX = x + _x
    const nY = y + _y

    if (board[nY] == undefined || board[nY][nX] == undefined) {
    } else {
      let i = board[nY][nX] ? 1 : 0
      count += i
    }
  })

  return count
}
