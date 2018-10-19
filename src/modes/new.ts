import { dispatch, getState } from "../_store";
import log from "./log";
import newTask from "../task/action_new";
import stopTask from "../task/action_stop";
import summary from "../task/action_summary";

export default function(name = "Personal task") {
  const { tracking, callTime } = getState();
  const recent = callTime - Date.now() > -60000; // 1 minute

  if (!tracking) {
    dispatch(newTask({ name }));
    return
  }

  if (recent) {
    dispatch(stopTask({}));
    dispatch(summary({}));
  } else {
    log("last");
  }

  return;
}
