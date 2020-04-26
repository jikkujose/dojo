import React, { useState, FC } from "react"
import { config } from "utils/config"

const { controls } = config

interface ControlsType {
  isRunning: boolean
  frameRate: number
  toggleSimulation: () => void
  clearBoard: () => void
  setFrameRate: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Controls: FC<ControlsType> = ({
  isRunning,
  toggleSimulation,
  clearBoard,
  frameRate,
  setFrameRate,
}) => {
  const [showSettings, setShowSettings] = useState(false)
  return (
    <nav className="Nav-container">
      <h2 className="Nav-title">game of life</h2>
      <p className="Nav-desc">{controls.gameDescription}</p>
      <div className="Nav-controls">
        <span className="btn" onClick={toggleSimulation}>
          <span
            style={{
              background: !isRunning
                ? controls.startBtnColor
                : controls.stopBtnColor,
            }}
          >
            {!isRunning ? "play" : "stop"}
          </span>
        </span>
        <span className="btn">
          <span onClick={clearBoard}>reset</span>
        </span>
        <span className="btn" onClick={() => setShowSettings(!showSettings)}>
          <span
            style={{
              background: !showSettings
                ? controls.showSettingsColor
                : controls.hideSettingsColor,
            }}
          >
            {!showSettings ? "settings" : "done"}
          </span>
        </span>
      </div>
      {showSettings && (
        <div className="Nav-settings-container">
          <div className="Nav-setting">
            <label>simulation speed</label>
            <span className="btn">
              <input
                type="text"
                style={{ width: 25 }}
                value={frameRate}
                onChange={setFrameRate}
              />
            </span>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Controls
