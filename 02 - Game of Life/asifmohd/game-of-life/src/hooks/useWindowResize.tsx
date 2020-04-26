import { useEffect, useState } from "react"
import { getWindowWidth, getWindowHeight } from "utils/utils"

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth)
  const [windowHeight, setWindowHeight] = useState(getWindowHeight)

  useEffect(() => {
    let timeoutId

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setWindowWidth(getWindowWidth())
        setWindowHeight(getWindowHeight())
      }, 150)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return { windowWidth, windowHeight }
}

export default useWindowResize
