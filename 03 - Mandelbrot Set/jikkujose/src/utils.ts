import { config } from "./config"

export const coordinateTranslator = (x: number, y: number) => {
  let aspectRatio = config.width / config.height
  const scaleFactor = 4.2

  let _y = (y / config.height) * scaleFactor
  let _x = (x / config.height) * scaleFactor

  return [_x - (aspectRatio * scaleFactor) / 2, _y - scaleFactor / 2]
}
