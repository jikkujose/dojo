import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { isMobileDevice, setContainerHeight } from "utils/utils"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

if (isMobileDevice()) {
  setContainerHeight()
  window.addEventListener("resize", () => {
    setContainerHeight()
  })
}
