import p5 from "p5"
import { config } from "./config"
import { willConverge } from "./mandlebrot"
import { coordinateTranslator } from "./utils"

const sketch = s => {
  s.setup = () => {
    s.createCanvas(config.width, config.height)
    s.background(230)
    s.noLoop()
  }

  s.draw = () => {
    console.log("draw")

    drawPoints()
  }

  const drawPoints = () => {
    for (let i = 0; i < config.width; i++) {
      for (let j = 0; j < config.height; j++) {
        drawPoint(i, j)
      }
    }
  }

  const drawPoint = (x: number, y: number) => {
    let c = coordinateTranslator(x, y)

    if (willConverge(c)) {
      s.point(x, y)
    }
  }
}

new p5(sketch)
