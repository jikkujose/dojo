import { getTwoDArray } from "./utils"

export class Conway {
  constructor(board) {
    this.board = board
    this.xCellCount = this.board[0].length
    this.yCellCount = this.board.length

    this.nextBoard = getTwoDArray(this.xCellCount, this.yCellCount)
  }

  randomState = () => Math.floor(10 * Math.random()) % 2 == 0

  next = () => {
    for (let i = 0; i < this.xCellCount; i++) {
      for (let j = 0; j < this.yCellCount; j++) {
        this.nextBoard[j][i] = this.willCellLive(i + 1, j + 1)
      }
    }

    this.board = this.nextBoard

    return this.board
  }

  willCellLive = (x, y) => {
    const currentState = this.board[y - 1][x - 1]
    const liveNeighbours = this.liveNeighbourCount(x, y)

    switch (liveNeighbours) {
      case 0:
        return false
      case 1:
        return false
      case 2:
        const result = currentState ? true : false
        return result
      case 3:
        return true
      default:
        return false
    }
  }

  liveNeighbourCount = (x, y) => {
    const addresses = [
      [-1, -1],
      [-1, 1],
      [-1, 0],
      [1, -1],
      [1, 1],
      [1, 0],
      [0, -1],
      [0, 1],
    ]

    let count = 0
    const xCellCount = this.board.length - 1
    const yCellCount = this.board[0].length - 1

    addresses.forEach(([_x, _y]) => {
      const nx = x + _x
      const ny = x + _y
      let isNeighbourCellAlive = false

      if (nx < 1 || nx > xCellCount || ny < 1 || ny > yCellCount) {
      } else {
        isNeighbourCellAlive = Math.floor(10 * Math.random()) % 2 == 0
      }

      if (isNeighbourCellAlive) {
      }
    })

    console.log("coord:", x, y, count)
    return count
  }
}
