import { useEffect, useState } from "react"
import { getWindowWidth } from "./utils"

const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    let timeoutId

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWindowWidth(getWindowWidth()), 150)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return windowWidth
}

export default useWindowResize
