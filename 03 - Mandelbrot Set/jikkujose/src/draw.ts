import p5 from "p5"
import { config } from "./config"
import { willConverge } from "./mandlebrot"
import { coordinateTranslator } from "./utils"

const sketch = s => {
  s.setup = () => {
    s.createCanvas(config.width, config.height)
    s.background(23)
    s.noLoop()
  }

  s.draw = () => {
    console.log("draw")

    let n = 50
    let scaleFactor = 3
    let shiftX = 0.51
    let shiftY = 0.3

    drawTileInLayers(n, scaleFactor, shiftX, shiftY)
    // drawTile(0, 0, config.width, config.height, n, scaleFactor, shiftX, shiftY)
    // drawInLayers(5)
    // drawGraph()
  }

  s.mouseClicked = () => {
    console.log(s.mouseX, s.mouseY, coordinateTranslator(s.mouseX, s.mouseY))
  }

  const drawTileInLayers = (
    l: number,
    scaleFactor: number = 1,
    shiftX: number = 0,
    shiftY: number = 0
  ) => {
    let k = l
    for (let i = 0; i < k; i++) {
      drawTile(
        0,
        0,
        config.width,
        config.height,
        Math.floor(l / k) * i + 1,
        scaleFactor,
        shiftX,
        shiftY
      )
    }
  }

  const drawPoints = (n: number) => {
    for (let i = 0; i < config.width; i++) {
      for (let j = 0; j < config.height; j++) {
        drawPoint(i, j, n)
      }
    }
  }

  const drawInLayers = (n: number) => {
    for (let i = 0; i < n; i++) {
      drawPoints(i)
    }
  }

  const drawTiles = (n: number, tileSize: number = 10) => {
    for (let i = 0; i < config.width / tileSize; i++) {
      for (let j = 0; j < config.height / tileSize; j++) {
        drawTile(i, j, (i + 1) * tileSize, (j + 1) * tileSize, n)
      }
    }
  }

  const drawTile = (
    lX,
    lY,
    rX,
    rY,
    n,
    scaleFactor: number = 1,
    shiftX: number = 0,
    shiftY: number = 0
  ) => {
    for (let i = lX; i < rX; i++) {
      for (let j = lY; j < rY; j++) {
        drawPoint(i, j, n, scaleFactor, shiftX, shiftY)
      }
    }
  }

  const drawPoint = (
    x: number,
    y: number,
    n: number,
    scaleFactor: number = 1,
    shiftX: number = 0,
    shiftY: number = 0
  ) => {
    let c = coordinateTranslator(x, y, scaleFactor, shiftX, shiftY)

    if (willConverge(c, n)) {
      s.stroke(10 * n)
      s.point(x, y)
    }
  }

  const drawGraph = () => {
    s.stroke("rgba(255, 0, 0, 0.4)")
    s.line(0, config.height / 2, config.width, config.height / 2)
    s.line(config.width / 2, 0, config.width / 2, config.height)
    s.stroke("rgba(255, 0, 0, 0.4)")
    s.strokeWeight(4)
    s.point(config.width / 2, config.height / 2)
  }
}

new p5(sketch)
