import React from "react";
import p5 from "p5";
import renderer from "./p5/renderer";
import P5Wrapper from "./p5/wrapper";
import {World} from "./lib/world"
import "./App.css"

export interface AppState {
  isRunning: boolean
  simulationSpeed: number
  gridSize: number
}

class App extends React.Component<{}, AppState> {

  state = {isRunning: false, simulationSpeed: 60, gridSize: 20}

  constructor(props: any) {
    super(props);
    World.instantiateWorld(this.state.gridSize, this.state.gridSize)
  }

  onToggleClick = () => {
    this.setState({isRunning: !this.state.isRunning})
  }

  onSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let size = Number.parseInt(e.target.value)
    if (size !== undefined && !isNaN(size))
      this.setState( {gridSize: size})
    else 
      this.setState( {gridSize: 0})

  }

  onChangeClick = () => {
    this.setState({isRunning: false});
    let size = this.state.gridSize
    if (size > 100) size = 100
    if (size < 2) size = 2
    this.setState( {gridSize: size})
    World.instantiateWorld(this.state.gridSize, this.state.gridSize)
  }

  onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let parsed = Number.parseInt(e.target.value)
    if (parsed !== undefined && !isNaN(parsed)) {
      this.setState({simulationSpeed: parsed})
      let speed = 302 - parsed
      console.log(speed)
      World.getWorld().simulationSpeed = speed
    }
  }

  render() {
    return (
      <div className="rowC">
        <div >
        <P5Wrapper renderer={renderer} onP5Changed={this.onP5Changed} 
        isRunning ={this.state.isRunning}
      />
        </div>
        <div className="start">
          <br/>
          Size
          <input type="text" id="size" value={this.state.gridSize} onChange={this.onSizeChange}/>
          <button onClick={this.onChangeClick} >Change / Reset </button>
          <br/>
          <br/>
          <button onClick={this.onToggleClick} >{this.state.isRunning ? "Stop" : "Start"} </button>
          <br/>
          <br/>
          Speed
            <input type="range" min="1" max="300" 
              onChange={this.onSpeedChange} className="slider" id="myRange"/>
        </div>
      </div>
    )
  }

  private onP5Changed = (p: p5) => {
    // tslint:disable:no-console
    console.log(p);
  };
}

export default App;
