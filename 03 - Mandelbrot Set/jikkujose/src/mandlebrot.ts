import { config } from "./config"

export const mandlebrot = ([x, y], [cX, cY]) => {
  const squareX = x * x - y * y
  const squareY = 2 * x * y

  return [squareX + cX, squareY + cY]
}

export const iterate = ([cX, cY], n) => {
  let x = 0,
    y = 0

  for (let i = 0; i < n; i++) {
    ;[x, y] = mandlebrot([x, y], [cX, cY])
  }

  return [x, y]
}

export const willConverge = ([x, y], n = config.iterationCount) => {
  const c = iterate([x, y], n)

  if (c[0] > 2 || c[1] > 2) {
    return false
  } else {
    return true
  }
}
