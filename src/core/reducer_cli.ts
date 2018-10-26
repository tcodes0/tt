import { Action } from "redux-actions"
import { CLI_SET_CALL_TIME, TASK_TOGGLE_TRACKING, TASK_NEW } from "."
import { EmptyObject } from "../util"

const initialState: { tracking: boolean; callTime: number } = {
  callTime: 0,
  tracking: false,
}

export default function reducer(
  state = initialState,
  action: Action<EmptyObject>,
) {
  switch (action.type) {
    case CLI_SET_CALL_TIME: {
      const result = { ...state, callTime: Date.now() }
      return result
    }

    case TASK_TOGGLE_TRACKING: {
      const result = { ...state, tracking: !state.tracking }
      return result
    }

    case TASK_NEW: {
      const result = { ...state, tracking: true }
      return result
    }

    default:
      return state
  }
}
