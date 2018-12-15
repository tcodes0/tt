import {
  CLI_SET_CALL_TIME,
  TASK_SET_START,
  CLI_SET_ROOT_DIR,
  TASK_SET_END,
  PayloadSetRoot,
} from '.'
import { ttDir, Action } from '../util'

const initialState: { tracking: boolean; callTime: number; ttRoot: string } = {
  callTime: 0,
  tracking: false,
  ttRoot: ttDir,
}

export default function reducer(
  state = initialState,
  action: Action<PayloadSetRoot>,
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

    case TASK_SET_START: {
      const result = { ...state, tracking: true }
      return result
    }

    case TASK_SET_END: {
      const result = { ...state, tracking: false }
      return result
    }

    default:
      return state
  }
}
