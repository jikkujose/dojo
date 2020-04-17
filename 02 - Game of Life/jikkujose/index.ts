import p5 from "p5"

const sketch = s => {
  s.setup = () => {
    s.createCanvas(512, 512)
    s.background(230)
    s.noLoop()
  }

  s.draw = () => {
    console.log("draw")
  }
}

new p5(sketch)
