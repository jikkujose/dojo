import p5 from "p5"

import { config } from "./config"
import { Conway } from "./conway"
import { getTwoDArray } from "./utils"

const sketch = s => {
  const { size, gap } = config.cell
  const { width, height } = config.board
  const xCellCount = Math.floor(width / (size + gap))
  const yCellCount = Math.floor(height / (size + gap))
  const b = getTwoDArray(xCellCount, yCellCount)

  const conway = new Conway(b)

  s.setup = () => {
    s.createCanvas(config.board.width, config.board.height)
    s.background(config.colors.background)
    s.frameRate(config.simulation.frameRate)
  }

  s.draw = () => {
    console.log("draw")
    s.background(config.colors.background)
    drawBoard(conway.next())
  }

  const drawBoard = board => {
    const xCellCount = board[0].length
    const yCellCount = board.length

    for (let i = 0; i < xCellCount; i++) {
      for (let j = 0; j < yCellCount; j++) {
        drawCell(i + 1, j + 1, board[j][i])
      }
    }
  }

  const drawCell = (
    x: number,
    y: number,
    isAlive = true,
    { size, gap, radius } = config.cell,
    { on, off } = config.colors
  ) => {
    const _x = (x - 1) * (size + gap)
    const _y = (y - 1) * (size + gap)

    const fillColor = isAlive ? on : off
    s.fill(fillColor)

    s.noStroke()
    s.rect(_x, _y, size, size, radius)
  }
}

new p5(sketch)
