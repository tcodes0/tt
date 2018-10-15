import { dispatch, getState } from "../_store";
import log from "./log";
import shutdown from "../cli/action_shutdown";
import newTask from "../task/action_new";
import stopTask from "../task/action_stop";
import summary from "../task/action_summary";

export default function(name = "Personal task") {
  const { tracking, callTime } = getState();
  const timeSince = callTime - Date.now();
  const recent = timeSince > -60000; // 1 minute

  if (!tracking) {
    dispatch(newTask({ name }));
    return dispatch(shutdown());
  }

  if (Number.isNaN(timeSince)) {
    console.warn("doNew: timeSince is Nan");
  }

  if (recent) {
    dispatch(stopTask());
    dispatch(summary());
  } else {
    log("last");
  }

  return;
}
