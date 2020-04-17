import React, { useState, useCallback, useRef, useEffect } from "react"
import "./App.css"

let ROW = 30
let COLUMN = 30

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
  const [isRunning, setisRunning] = useState(false)
  const isRunningRef = useRef(isRunning)
  isRunningRef.current = isRunning

  const isRunningRef = useRef(false)
  // isRunningRef.current = false

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
    setTimeout(startSimulation, 100)
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

  return (
    <>
      <button onClick={handleSimulation}>
        {!isRunning ? "START" : "PAUSE"}
      </button>
      <main className="Main-container">
        <div
          className="Grid-container"
          style={{
            gridTemplateColumns: `repeat(${COLUMN}, 25px)`,
          }}
        >
          {grid.map((row, i) =>
            row.map((col, j) => (
              <div
                key={`${i}${j}`}
                onClick={() => setGridState(i, j)}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: grid[i][j] ? "#212121" : "#f1f1f1",
                  border: "solid 1px black",
                }}
              ></div>
            ))
          )}
        </div>
      </main>
    </>
  )
}

export default App
