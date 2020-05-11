import { config } from "./config"

export const willConverge = (
  cX: number,
  cY: number,
  n = config.iterationCount
) => {
  let x = 0,
    y = 0,
    radiusSquare = 0

  for (let i = 0; i < n; i++) {
    x = x * x - y * y + cX
    y = 2 * x * y + cY

    radiusSquare = x * x + y * y

    if (radiusSquare > 4) return i
  }

  return n
}
