import * as p5 from "p5"
import { World } from "../lib/world"

export default function(renderer: p5) {
  let side = 0
  let lineSpace = 0
  let frameCount = 1
  let usedCells: Array<number> = []
  let world = () => {
    return World.getWorld()
  }

  renderer.setup = () => {
    side = Math.min(window.innerWidth, window.innerHeight)
    renderer.createCanvas(side, side)
  }

  let drawGrid = () => {
    lineSpace = side / world().numberOfRows
    for (let i = 0; i < world().numberOfRows; i++) {
      let posX = i * lineSpace
      renderer.line(posX, 0, posX, 2000)
      let posY = i * lineSpace
      renderer.line(0, posY, 2000, posY)
    }
  }

  let drawPopulation = () => {
    let rows = world().numberOfRows
    let cols = world().numberOfColumns
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (world().currentState[i][j]) {
          let posX = i * lineSpace
          let posY = j * lineSpace
          renderer.fill(0, 0, 0, 200)
          renderer.rect(posX, posY, lineSpace, lineSpace)
        }
      }
    }
  }

  renderer.draw = () => {
    renderer.clear()
    drawGrid()
    drawPopulation()
    if (world().isRunning) {
      console.log(world().simulationSpeed)
      if (frameCount % world().simulationSpeed === 0) {
        world().update()
      }
      frameCount++
    } else frameCount = 0
  }

  renderer.mousePressed = () => {
    usedCells = []
  }
  renderer.mouseDragged = () => {
    let row = Math.floor(renderer.mouseX / lineSpace)
    let column = Math.floor(renderer.mouseY / lineSpace)
    let pos = 10000000 * row + column
    if (!usedCells.includes(pos)) {
      usedCells.push(pos)
      world().toggleStateAt(row, column)
    }
  }

  renderer.mouseClicked = () => {
    let row = Math.floor(renderer.mouseX / lineSpace)
    let column = Math.floor(renderer.mouseY / lineSpace)
    let pos = 10000000 * row + column
    if (!usedCells.includes(pos)) {
      world().toggleStateAt(row, column)
    }
  }
}
