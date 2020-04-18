import p5 from "p5"

import { config } from "./config"
import { getTwoDArray } from "utils"

const sketch = s => {
  const game = {
    state: null,
  }

  s.setup = () => {
    s.createCanvas(config.board.width, config.board.height)
    s.background(config.colors.background)
    console.log(getTwoDArray(3, 4))
    s.noLoop()
  }

  s.draw = () => {
    console.log("draw")
    console.log(config.name)
  }
}

new p5(sketch)
