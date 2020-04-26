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

export const getWindowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

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

export const isMobileDevice = () =>
  typeof window.orientation !== "undefined" ||
  navigator.userAgent.indexOf("IEMobile") !== -1

export const setContainerHeight = () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

export const digitsOnly: RegExp = /[^1234567890]/g
// export const validateInput = (
//   e: React.KeyboardEvent<HTMLInputElement>,
//   validatorExp: RegExp
// ) => {
//   console.log(e.key, e.keyCode)
//   if (!validatorExp.test(e.key)) e.preventDefault()
// }
