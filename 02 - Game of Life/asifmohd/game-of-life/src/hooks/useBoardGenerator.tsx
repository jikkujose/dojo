import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { config } from "../utils/config"
import { gridGenerator } from "utils/utils"
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
  const [dimension, setDimension] = useState<Dimension>({ row: 50, column: 50 })
  const [grid, setGrid] = useState<number[][]>(() => gridGenerator(0, 0))
  let windowWidth = useWindowResize()

  const calculateGridDimension = (height: number, width: number) => {
    const {
      board: { verticalPadding, hoirizontalPadding },
      cells: { size },
    } = config
    return {
      row: Math.floor(height / size) - verticalPadding,
      column: Math.floor(width / size) - hoirizontalPadding,
    }
  }

  const setGameBoard = ({ row, column }) => {
    setGrid(gridGenerator(row, column))
    setDimension((dimension) => ({ ...dimension, row, column }))
  }

  useEffect(() => {
    if (gameBoard && gameBoard.current) {
      const { clientHeight, clientWidth } = gameBoard.current
      setGameBoard(calculateGridDimension(clientHeight, clientWidth))
    }
  }, [gameBoard, windowWidth])

  return [grid, setGrid, dimension, setDimension]
}
