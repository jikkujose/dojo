import { InitContextProps } from "./reducer"
import React, { createContext, useReducer } from "react"
import { reducer, State } from "store/reducer"
import { motion } from "framer-motion"
import { openSpring, closeSpring } from "utils/animation"

const initialState: State = {
  route: {
    path: "",
    prev: "",
  },
  slide: {
    isSelected: false,
    selectedIndex: 0,
  },
}
const store = createContext({} as InitContextProps)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Provider value={{ state, dispatch }}>
      <motion.section
        className="App-container"
        style={{
          gridTemplateRows: state.slide.isSelected
            ? `0 minmax(400px, 1fr) 0`
            : `95px minmax(400px, 1fr) 95px`,
        }}
      >
        {children}
      </motion.section>
    </Provider>
  )
}

export { store, StateProvider }
