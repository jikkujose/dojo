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

    drawInLayers(25)
    // drawGraph()
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

  const drawPoint = (x: number, y: number, n) => {
    let c = coordinateTranslator(x, y)

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
