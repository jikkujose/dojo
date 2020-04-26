import { useEffect, useState } from "react"
import { getWindowSize } from "utils/utils"

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize)

  useEffect(() => {
    let timeoutId

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWindowSize(getWindowSize()), 150)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return windowSize
}

export default useWindowResize
