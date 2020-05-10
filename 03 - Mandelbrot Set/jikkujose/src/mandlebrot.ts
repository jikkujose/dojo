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
