export const gridGenerator = (row: number, col: number): number[][] =>
  Array.from(Array(row)).map(() => Array.from(Array(col)).fill(0))

export const getCurrentGridDim = (grid: number[][]) => [
  grid.length,
  grid[0].length,
]
export const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

export const getPadding = (
  {
    verticalPadding,
    hoirizontalPadding,
    smScreenVerticalPadding,
    smScreenhoirizontalPadding,
  },
  windowWidth: number
): { vPadding: number; hPadding: number } =>
  windowWidth > 576
    ? { vPadding: verticalPadding, hPadding: hoirizontalPadding }
    : {
        vPadding: smScreenVerticalPadding,
        hPadding: smScreenhoirizontalPadding,
      }
