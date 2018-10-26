import log from "./mode_log"
import {
  dispatch,
  getState,
  action_new,
  action_stop,
  action_summary,
} from "../core"

export default function(name = "Personal task") {
  const {
    cli: { tracking, callTime },
  } = getState()
  const recent = callTime - Date.now() > -60000 // 1 minute

  if (!tracking) {
    dispatch(action_new({ name }))
    return
  }

  if (recent) {
    dispatch(action_stop({}))
    dispatch(action_summary({}))
  } else {
    log("last")
  }

  return
}
