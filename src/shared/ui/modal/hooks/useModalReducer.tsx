import { useReducer } from "react"

export interface ModalState {
  isShow: boolean
}

type ModalAction = { type: "show" } | { type: "close" }

const initialState: ModalState = { isShow: false }

function modalReducer(_state: ModalState, action: ModalAction): ModalState {
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
