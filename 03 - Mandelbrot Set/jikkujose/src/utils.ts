import { config } from "./config"

export const coordinateTranslator = (x: number, y: number) => {
  let aspectRatio = config.width / config.height

  let _y = (y / config.height) * 3
  let _x = (x / config.height) * 3

  return [_x - aspectRatio * 1.5, _y - 1.5]
}
