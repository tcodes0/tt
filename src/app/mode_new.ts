import { mode_log } from "."
import { dispatch, getState, taskNew, taskStop, taskSummary } from "../core"

export default function(name = "Personal task") {
  const {
    cli: { tracking, callTime },
  } = getState()
  const recent = callTime - Date.now() > -60000 // 1 minute

  if (!tracking) {
    dispatch(taskNew({ name }))
    return
  }

  if (recent) {
    dispatch(taskStop({}))
    dispatch(taskSummary({}))
  } else {
    mode_log("last")
  }

  return
}
