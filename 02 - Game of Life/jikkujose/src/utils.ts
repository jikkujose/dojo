export const getTwoDArray = (x: number, y: number) => {
  return new Array(y).fill(null).map(() => new Array(x))
}
