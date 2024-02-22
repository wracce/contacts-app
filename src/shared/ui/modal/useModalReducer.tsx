import { useReducer } from "react"

export interface State {
  isShow: boolean
}

type ModalAction = { type: "show" } | { type: "close" }

const initialState: State = { isShow: false }

function modalReducer(state: State, action: ModalAction): State {
  switch (action.type) {
    case "show":
      return { isShow: true }
    case "close":
      return { isShow: false }
    default:
      throw new Error("Unknown action")
  }
}

export const useModalReducer = () => useReducer(modalReducer, initialState)
