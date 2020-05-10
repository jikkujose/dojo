import { config } from "./config"

export const coordinateTranslator = (x: number, y: number) => {
  let _y = (y / config.height) * 6 - 3
  let aspectRatio = config.width / config.height
  let _x = (x / config.height) * (aspectRatio * 6) - aspectRatio * 3

  return [_x, _y]
}
