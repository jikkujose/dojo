import { willConverge } from "../src/mandlebrot"

test("test for convergence for [-1, 0] @ 20th iteration", () => {
  expect(willConverge(-1, 0, 20)).toEqual(20)
})

test("test for convergence for [-0.75, 1] @ 6th iteration", () => {
  expect(willConverge(-0.75, 1, 3)).toEqual(2)
})
