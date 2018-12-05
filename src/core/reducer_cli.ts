import { Action } from "redux-actions"
import {
  CLI_SET_CALL_TIME,
  TASK_TOGGLE_TRACKING,
  TASK_NEW,
  CLI_SET_ROOT_DIR,
  CliSetRootType,
} from "."
import { ttDir } from "../util"
import idx from "idx"

const initialState: { tracking: boolean; callTime: number; ttRoot: string } = {
  callTime: 0,
  tracking: false,
  ttRoot: ttDir,
}

export default function reducer(
  state = initialState,
  action: Action<CliSetRootType>,
) {
  switch (action.type) {
    case CLI_SET_CALL_TIME: {
      const result = { ...state, callTime: Date.now() }
      return result
    }

    case CLI_SET_ROOT_DIR: {
      if (!idx(action, _ => _.payload.ttRoot)) {
        return state
      }
      const { ttRoot } = action.payload as CliSetRootType
      const result = { ...state, ttRoot }
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
