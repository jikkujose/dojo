import React, { useState, useCallback } from "react"
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

const gridGenerator = (row: number, col: number) =>
  Array.from(Array(ROW)).map(() => Array.from(Array(COLUMN)).fill(0))

const App = () => {
  const [grid, setGrid] = useState(gridGenerator.call(null, ROW, COLUMN))
  const [isRunning, setisRunning] = useState(false)

  const setGridState = (i: number, j: number) => {
    const newGrid = JSON.parse(JSON.stringify(grid))
    newGrid[i][j] = grid[i][j] ? 0 : 1
    setGrid(newGrid)
  }

  return (
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
  )
}

export default App
