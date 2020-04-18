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
        this.nextBoard[j][i] = this.randomState()
      }
    }

    return this.nextBoard
  }
}
