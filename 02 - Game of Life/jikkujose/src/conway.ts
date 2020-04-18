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
        this.nextBoard[j][i] = this.willCellLive(j, i)
      }
    }

    this.board = this.nextBoard

    return this.board
  }

  willCellLive = (j, i) => {
    const currentState = this.board[j][i]
    const liveNeighbours = this.liveNeighbourCount(j, i)

    if (currentState) {
      if (liveNeighbours < 2 || liveNeighbours > 3) {
        return false
      } else {
        return true
      }
    } else {
      if (liveNeighbours == 3) {
        return true
      }
    }

    return false
  }

  liveNeighbourCount = (j, i) => {
    const addresses = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
    ]

    const count = addresses.reduce((total, [l, m]) => {
      let isAlive = false

      const maxJIndex = this.board.length - 1
      const maxIIndex = this.board[0].length - 1

      const _j = j + l
      const _i = i + m

      if (_j < 0 || _j > maxJIndex || _i < 0 || _i > maxIIndex) {
        isAlive = false
      } else {
        isAlive = this.board[_j][_i]
      }

      return isAlive ? total + 1 : total
    }, 0)

    return count
  }
}
