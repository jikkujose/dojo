import { conway, liveCellsCount } from "../src/conway"

test("2x2 - diagonal", () => {
  expect(conway([[true, false], [false, true]])).toEqual([
    [false, false],
    [false, false],
  ])
})

test("2x2 - square", () => {
  expect(conway([[true, true], [true, true]])).toEqual([
    [true, true],
    [true, true],
  ])
})

test("2x2 - to square", () => {
  expect(conway([[false, true], [true, true]])).toEqual([
    [true, true],
    [true, true],
  ])
})

test("2x2 - deing two", () => {
  expect(conway([[false, false], [true, true]])).toEqual([
    [false, false],
    [false, false],
  ])
})

test("3x3 - oscillator", () => {
  expect(
    conway([[false, false, false], [true, true, true], [false, false, false]])
  ).toEqual([[false, true, false], [false, true, false], [false, true, false]])
})

test("1x1", () => {
  expect(liveCellsCount([true], 0, 0)).toEqual(0)
})

test("2x2", () => {
  expect(liveCellsCount([[true, false], [true, false]], 0, 0)).toEqual(1)
})

test("2x2", () => {
  expect(liveCellsCount([[true, false], [true, false]], 1, 0)).toEqual(2)
})

test("2x2", () => {
  expect(liveCellsCount([[true, false], [true, false]], 1, 1)).toEqual(2)
})

test("2x2", () => {
  expect(liveCellsCount([[true, false], [true, false]], 0, 1)).toEqual(1)
})

test("3x3", () => {
  expect(
    liveCellsCount(
      [[true, true, true], [true, true, true], [false, false, false]],
      0,
      0
    )
  ).toEqual(3)
})

test("3x3", () => {
  expect(
    liveCellsCount(
      [[true, true, true], [true, true, true], [false, false, false]],
      2,
      2
    )
  ).toEqual(2)
})

test("3x3", () => {
  expect(
    liveCellsCount(
      [[true, true, true], [true, true, true], [false, false, false]],
      1,
      1
    )
  ).toEqual(5)
})
