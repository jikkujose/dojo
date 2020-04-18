import React, { useState, useRef, useEffect } from "react"
import "./App.scss"

let ROW = 35
let COLUMN = 35

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

const deepClone = (data) => JSON.parse(JSON.stringify(data))

const gridGenerator = (row: number, col: number) =>
  Array.from(Array(ROW)).map(() => Array.from(Array(COLUMN)).fill(0))

const App = () => {
  const [grid, setGrid] = useState(gridGenerator.call(null, ROW, COLUMN))
  const [tick, setTick] = useState(100)
  const tickRef = useRef(tick)
  const [isRunning, setisRunning] = useState(false)
  const isRunningRef = useRef(isRunning)
  isRunningRef.current = isRunning

  const setGridState = (i: number, j: number) => {
    const newGrid = deepClone(grid)
    newGrid[i][j] = grid[i][j] ? 0 : 1
    setGrid(newGrid)
  }

  const getNeighborsCount = (grid, i, j) => {
    let neighborCount = 0
    neighborhood.forEach(([x, y]) => {
      const currI = i + x
      const currJ = j + y
      if (currI >= 0 && currI < ROW && currJ >= 0 && currJ < COLUMN) {
        neighborCount += grid[currI][currJ]
      }
    })
    return neighborCount
  }

  const startSimulation = () => {
    if (!isRunningRef.current) return
    setGrid((grid) => {
      const newGrid = deepClone(grid)
      for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COLUMN; j++) {
          const neighborCount = getNeighborsCount(grid, i, j)
          if (neighborCount < 2 || neighborCount > 3) newGrid[i][j] = 0
          else if (grid[i][j] === 0 && neighborCount === 3) newGrid[i][j] = 1
        }
      }
      return newGrid
    })
    setTimeout(startSimulation, tickRef.current)
  }

  const handleSimulation = () => {
    setisRunning(!isRunning)
    if (!isRunning) {
      isRunningRef.current = true
      startSimulation()
    }
  }

  const clearSimulation = () => {
    setisRunning(false)
    setGrid(gridGenerator(ROW, COLUMN))
  }

  useEffect(() => {
    tickRef.current = tick
  }, [tick])

  return (
    <>
      <div className="Main-container">
        <nav className="Nav-container">
          <h2 className="Nav-title">game of life</h2>
          <p className="Nav-desc">
            The game is a zero-player game, meaning that its evolution is
            determined by its initial state, requiring no further input. One
            interacts with the Game of Life by creating an initial configuration
            and observing how it evolves. It is Turing complete and can simulate
            a universal constructor or any other Turing machine. Simply click on
            the grid to set intial state and click play!
          </p>
          <div className="Nav-controls">
            <span className="btn" onClick={handleSimulation}>
              <span>{!isRunning ? "play" : "stop"}</span>
            </span>
            <span className="btn">
              <span onClick={clearSimulation}>reset</span>
            </span>
            <span className="btn">
              <span>settings</span>
            </span>
          </div>
          <div className="Nav-settings-container">
            <div className="Nav-setting">
              <label>simulation speed</label>
              <span className="btn">
                <input
                  type="text"
                  style={{ width: 25 }}
                  value={tick}
                  onChange={(e) => setTick(+e.target.value)}
                />
              </span>
            </div>
            {/* <div className="Nav-setting">
              <label>Rows x Columns</label>
              <span style={{ display: "flex", width: "100%" }}>
                <span className="btn">
                  <input type="text" style={{ width: 25 }} />
                </span>
                <span>X</span>
                <span className="btn">
                  <input type="text" style={{ width: 25 }} />
                </span>
              </span>
            </div> */}
          </div>
        </nav>
        <main className="Grid-container">
          <div
            className="Grid"
            style={{
              gridTemplateColumns: `repeat(${COLUMN}, 20px)`,
            }}
          >
            {grid.map((row, i) =>
              row.map((col, j) => (
                <div
                  key={`${i}${j}`}
                  onClick={() => setGridState(i, j)}
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: grid[i][j] ? "#212121" : "#f1f1f1",
                    border: "solid 1px black",
                  }}
                ></div>
              ))
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
