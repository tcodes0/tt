import {
  CLI_SET_CALL_TIME,
  TASK_TOGGLE_TRACKING,
  TASK_SET,
  CLI_SET_ROOT_DIR,
  CliSetRootType,
} from "."
import { ttDir, Action } from "../util"

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
      const { ttRoot } = action.payload
      if (!ttRoot) {
        return state
      }
      const result = { ...state, ttRoot }
      return result
    }

    case TASK_TOGGLE_TRACKING: {
      const result = { ...state, tracking: !state.tracking }
      return result
    }

    case TASK_SET: {
      const result = { ...state, tracking: true }
      return result
    }

    default:
      return state
  }
}
