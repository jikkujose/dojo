import p5 from "p5"
import { config } from "./config"

const sketch = s => {
  s.setup = () => {
    s.createCanvas(config.width, config.height)
    s.background(230)
    s.noLoop()
  }

  s.draw = () => {
    console.log("draw")

    s.fill(10)
    s.rect(10, 10, 20, 20)
  }
}

new p5(sketch)
