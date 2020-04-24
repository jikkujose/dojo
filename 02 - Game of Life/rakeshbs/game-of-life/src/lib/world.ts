class World {
  isRunning = false
  simulationSpeed = 60
  currentState: boolean[][] = []
  numberOfRows: number = 0
  numberOfColumns: number = 0
  private static instance: World;

  public static getWorld(): World {
    return World.instance;
  }

  public static instantiateWorld(nRows: number, nCols: number): World {
    World.instance = new World(nRows, nCols);
    return World.instance
  }

  constructor(nRows: number, nCols: number) {
    this.numberOfColumns = nCols
    this.numberOfRows = nRows
    this.numberOfColumns = this.numberOfRows
    this.simulationSpeed = 60

    for (let i = 0; i < nRows; i++) {
      this.currentState[i] = []
      for (let j = 0; j < nCols; j++) {
        this.currentState[i][j] = false
      }
    }
  }

  toggleStateAt = (row: number, column: number) => {
    if (row >= 0 && column >= 0 && row <
      this.numberOfRows && column < this.numberOfColumns) {
      this.currentState[row][column] = !this.currentState[row][column]
    }
  }

  countNeighbours = (row: number, col: number) => {
    let count = 0
    for (let k = -1; k <= 1; k++) {
      for (let l = -1; l <= 1; l++) {
        if (k !== 0 || l !== 0) {
          let r = row + k
          let c = col + l
          if (r >= 0 && c >= 0 && r < this.numberOfRows && c < this.numberOfColumns) {
            if (this.currentState[r][c]) count++
          }
        }
      }
    }
    return count
  }

  update() {
    let newState: boolean[][] = []
    for (let i = 0; i < this.numberOfRows; i++) {
      newState[i] = []
      for (let j = 0; j < this.numberOfColumns; j++) {
        newState[i][j] = false
        let neighbours = this.countNeighbours(i, j)
        if (this.currentState[i][j]) {
          if (neighbours < 2) {
            newState[i][j] = false
          } else if (neighbours > 3) {
            newState[i][j] = false
          } else {
            newState[i][j] = true
          }
        } else {
          if (neighbours === 3) {
            newState[i][j] = true
          }
        }
      }
    }
    this.currentState = newState
  }
}

export {World}
