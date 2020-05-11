import { config } from "./config"

export const willConverge = (
  cX: number,
  cY: number,
  n = config.iterationCount
) => {
  let x = 0,
    y = 0,
    absoluteValue = 0

  for (let i = 0; i < n; i++) {
    let _x = x * x - y * y + cX
    y = 2 * x * y + cY

    absoluteValue = _x * _x + y * y
    x = _x

    if (absoluteValue > 4) return i
  }

  return n
}
