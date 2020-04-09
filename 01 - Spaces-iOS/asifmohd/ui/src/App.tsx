import React from "react"
import "./App.scss"
import Nav from "components/Nav/Nav"
import Main from "containers/Main/Main"
import TabBar from "components/TabBar/TabBar"
import { StateProvider } from "store/store"

const App = () => (
  <StateProvider>
    <Nav />
    <Main />
    <TabBar />
  </StateProvider>
)

export default App
