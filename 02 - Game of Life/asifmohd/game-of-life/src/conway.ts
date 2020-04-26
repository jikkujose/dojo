import { gridGenerator, getCurrentGridDim } from "utils/utils"

export const conway = (grid: number[][]) => {
  const [row, col] = getCurrentGridDim(grid)
  const nextGrid = gridGenerator(row, col)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      nextGrid[i][j] = getCellState(grid, i, j)
    }
  }
  return nextGrid
}

export const getCellState = (grid: number[][], i: number, j: number) => {
  const neighborCount = getNeighboringCellsCount(grid, i, j)
  if (neighborCount < 2 || neighborCount > 3) return 0
  else if (grid[i][j] === 0 && neighborCount === 3) return 1
  else return grid[i][j]
}

export const getNeighboringCellsCount = (
  grid: number[][],
  i: number,
  j: number
) => {
  const neighborhood = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ]
  let neighborCount = 0
  const [row, col] = getCurrentGridDim(grid)
  neighborhood.forEach(([x, y]) => {
    const currI = i + x
    const currJ = j + y
    if (currI >= 0 && currI < row && currJ >= 0 && currJ < col) {
      neighborCount += grid[currI][currJ]
    }
  })
  return neighborCount
}
