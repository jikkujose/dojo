export const getTwoDArray = (board, cell) => {
  const { width, height } = board
  const { size, gap } = cell

  const xCellCount = Math.floor(width / (size + gap))
  const yCellCount = Math.floor(height / (size + gap))

  return new Array(xCellCount).fill(null).map(() => new Array(yCellCount))
}
