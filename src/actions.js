const toggleTracking = () => {
  return {
    type: "TOGGLE_TRACKING"
  };
};

const startTracking = (task = "Personal task") => {
  return {
    type: "START_TRACKING",
    value: task
  };
};

const stopTracking = (task = "Personal task") => {
  return {
    type: "STOP_TRACKING",
    value: task
  };
};

const noArgsAction = () => {
  return {
    type: "NO_ARGS_ACTION"
  };
};

const config = () => {
  return {
    type: "CONFIG"
  };
};

const historyPush = obj => {
  return {
    type: "UPDATE_HISTORY_PUSH",
    value: obj
  };
};

export default {
  toggleTracking,
  startTracking,
  stopTracking,
  noArgsAction,
  config,
  historyPush
};
