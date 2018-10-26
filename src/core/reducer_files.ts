import { Action } from "redux-actions"
import { FILES_INIT } from "./action_init"

const initialState = {}

export default function reducer(state = initialState, action: Action<null>) {
  switch (action.type) {
    case FILES_INIT: {
      const result = { skipWrite: true }
      return result
    }

    default:
      return state
  }
}
