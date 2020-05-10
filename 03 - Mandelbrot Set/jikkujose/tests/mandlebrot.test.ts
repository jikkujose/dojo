import { mandlebrot } from "../src/mandlebrot"

test("[0, 0] at origin", () => {
  expect(mandlebrot([[0, 0], [0, 0]])).toEqual([0, 0])
})
