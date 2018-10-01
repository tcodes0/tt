export const operation = (
  mode = throw "mode cannot be undefined",
  input = [],
  extra = {}
) => ({
  mode: mode,
  input: Array.isArray(input) ? input : [input],
  ...extra
});
// input.toString = () => Array.prototype.join.bind(input)(' ')

export const initState = () => ({
  tracking: false
});

export const initTask = (name = "Personal task", inTime, outTime) => ({
  type: "INIT_TASK",
  task: name,
  in: inTime,
  out: outTime
});

const toggleTracking = () => ({
  type: "TOGGLE_TRACKING"
});

const startTracking = (task = "Personal task") => ({
  type: "START_TRACKING",
  task: task
});

const stopTracking = (task = "Personal task") => ({
  type: "STOP_TRACKING",
  task: task
});

const noArgsAction = () => ({
  type: "NO_ARGS_ACTION"
});

const historyPush = (task, history) => ({
  type: "HISTORY_PUSH",
  task,
  history
});

const configSet = (setting, config) => ({
  type: "CONFIG_SET",
  setting,
  config
});

const lockState = () => ({
  type: "STATE_LOCK"
});

const lockHistory = () => ({
  type: "HISTORY_LOCK"
});

export default {
  toggleTracking,
  startTracking,
  stopTracking,
  noArgsAction,
  historyPush,
  configSet,
  lockState,
  lockHistory
};
