class Conway {
  constructor(board) {
    this.board = board
  }

  next = () => {
    const r = () => Math.floor(10 * Math.random()) % 2 == 0
    return [[r(), r()], [r(), r()]]
  }
}

export const conway = new Conway([])
