import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { config } from "../utils/config"
import { gridGenerator, getPadding } from "utils/utils"
import useWindowResize from "./useWindowResize"

export interface Dimension {
  row: number
  column: number
}

export const useBoardGenerator = (
  gameBoard: React.RefObject<HTMLElement> | null
): [
  number[][],
  Dispatch<SetStateAction<any[][]>>,
  Dimension,
  Dispatch<SetStateAction<Dimension>>
] => {
  const [dimension, setDimension] = useState<Dimension>({ row: 0, column: 0 })
  const [grid, setGrid] = useState<number[][]>(() => gridGenerator(0, 0))
  let { windowWidth } = useWindowResize()

  const setGameBoard = ({ row, column }) => {
    setGrid(gridGenerator(row, column))
    setDimension((dimension) => ({ ...dimension, row, column }))
  }

  useEffect(() => {
    const calculateGridDimension = (height: number, width: number) => {
      const {
        board: { padding },
        cells: { size },
      } = config
      const { vPadding, hPadding } = getPadding(padding, windowWidth)
      return {
        row: Math.floor(height / size) - vPadding,
        column: Math.floor(width / size) - hPadding,
      }
    }

    if (gameBoard && gameBoard.current) {
      const { clientHeight, clientWidth } = gameBoard.current
      setGameBoard(calculateGridDimension(clientHeight, clientWidth))
    }
  }, [gameBoard, windowWidth])

  return [grid, setGrid, dimension, setDimension]
}
