import { config } from "./config"

export const getTwoDArray = (x: number, y: number) => {
  return new Array(y).fill(null).map(() => new Array(x))
}

export const getInitialBoard = () => {
  const { size, gap } = config.cell
  const { width, height } = config.board
  const xCellCount = Math.floor(width / (size + gap))
  const yCellCount = Math.floor(height / (size + gap))
  const board = getTwoDArray(xCellCount, yCellCount)
  const board = getTwoDArray(xCellCount, yCellCount)
  const randomState = () => Math.floor(10 * Math.random()) % 2 == 0

  for (let i = 0; i < xCellCount; i++) {
    for (let j = 0; j < yCellCount; j++) {
      board[j][i] = randomState()
    }
  }

  return board
}

export const translateToIndex = (x, y) => {
  const { size, gap } = config.cell
  const xCell = Math.floor(x / (size + gap))
  const yCell = Math.floor(y / (size + gap))

  return [xCell, yCell]
}
