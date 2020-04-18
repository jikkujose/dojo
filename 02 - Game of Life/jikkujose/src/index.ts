import p5 from "p5"

import { config } from "./config"
import { conway } from "./conway"

const sketch = s => {
  s.setup = () => {
    s.createCanvas(config.board.width, config.board.height)
    s.background(config.colors.background)
    s.frameRate(1)
  }

  s.draw = () => {
    console.log("draw")
    drawBoard(conway.next())
  }

  const drawBoard = board => {
    const xCellCount = board[0].length
    const yCellCount = board.length

    for (let i = 0; i < xCellCount; i++) {
      for (let j = 0; j < yCellCount; j++) {
        drawCell(i + 1, j + 1, board[i][j])
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
