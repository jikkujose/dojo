export const gridGenerator = (row: number, col: number) =>
  Array.from(Array(row)).map(() => Array.from(Array(col)).fill(0))

export const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth
