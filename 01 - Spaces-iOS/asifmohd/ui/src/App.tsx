import React from "react"
import "./App.scss"
import Nav from "components/Nav/Nav"
import Main from "containers/Main/Main"
import TabBar from "components/TabBar/TabBar"

const App = () => (
  <section className="App-container">
    <Nav />
    <Main />
    <TabBar />
  </section>
)

export default App
