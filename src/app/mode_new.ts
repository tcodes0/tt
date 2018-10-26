import { mode_log } from "."
import {
  dispatch,
  getState,
  action_taskNew,
  action_taskStop,
  action_taskSummary,
} from "../core"

export default function(name = "Personal task") {
  const {
    cli: { tracking, callTime },
  } = getState()
  const recent = callTime - Date.now() > -60000 // 1 minute

  if (!tracking) {
    dispatch(action_taskNew({ name }))
    return
  }

  if (recent) {
    dispatch(action_taskStop({}))
    dispatch(action_taskSummary({}))
  } else {
    mode_log("last")
  }

  return
}
