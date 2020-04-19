export function conway(board) {
  return [[true, false], [false, true]]
}

const countLiveNeighbours = (board, x: number, y: number) => {
  const shifts = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]
}
