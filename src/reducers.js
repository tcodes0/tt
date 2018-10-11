import { combineReducers } from "redux";

const initialState = {
  history: [],
  tracking: false,
  lockState: false,
  lockHistory: false
};

const lockState = (state = initialState.lockState, action) => {
  switch (action.type) {
    case "STATE_LOCK":
      return !state.lockState;
    default:
      return state;
  }
};

const lockHistory = (state = initialState.lockHistory, action) => {
  switch (action.type) {
    case "HISTORY_LOCK":
      return !state.lockHistory;
    default:
      return state;
  }
};

const tracking = (state = initialState.tracking, action) => {
  switch (action.type) {
    case "TOGGLE_TRACKING":
      return !state.tracking;
    case "START_TRACKING":
      return true;
    case "STOP_TRACKING":
      return false;
    default:
      return state;
  }
};

const history = (state = initialState.history, action) => {
  switch (action.type) {
    case "?":
      return "?";
    default:
      return state;
  }
};

export default combineReducers({ lockState, lockHistory, tracking, history });
