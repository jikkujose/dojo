import { Reducer, Dispatch } from "react"
interface Actions {
  type: string
  payload: any
}

export interface State {
  route: {
    path: string
    prev: string
  }
  slide: {
    isSelected: boolean
    selectedIndex: number
  }
}

export interface InitContextProps {
  state: State
  dispatch: Dispatch<Actions>
}

export const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "NAVIGATE":
      return {
        ...state,
        route: {
          ...state.route,
          path: action.payload,
          prev: state.route.path,
        },
      }
    case "SET CARD STATE":
      const { isSelected, selectedIndex } = action.payload
      return {
        ...state,
        slide: {
          ...state.slide,
          isSelected,
          selectedIndex,
        },
      }

    default:
      return state
  }
}
