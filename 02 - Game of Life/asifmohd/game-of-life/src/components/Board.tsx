import React, { FC } from "react"
import { Dimension } from "utils/useBoardGenerator"
import { config } from "utils/config"

const { cells } = config

interface BoardType {
  gameBoardRef: React.RefObject<HTMLElement>
  grid: number[][]
  gridDimension: Dimension
  toggleCellState: (x: number, y: number) => void
}

const Board: FC<BoardType> = ({
  gameBoardRef,
  grid,
  gridDimension,
  toggleCellState,
}) => {
  return (
    <main className="Grid-container" ref={gameBoardRef}>
      <div
        className="Grid"
        style={{
          gridTemplateColumns: `repeat(${gridDimension.column}, ${cells.size}px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <div
              key={`${i}${j}`}
              onClick={() => toggleCellState(i, j)}
              style={{
                width: `${cells.size}px`,
                height: `${cells.size}px`,
                backgroundColor: grid[i][j]
                  ? cells.aliveColor
                  : cells.deadColor,
                border: cells.border,
              }}
            ></div>
          ))
        )}
      </div>
    </main>
  )
}

export default Board
