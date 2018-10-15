import { combineReducers } from "redux";
import tracking from "../task/reducer_tracking";
import callTime from "../cli/reducer_callTime";

const rootReducer = combineReducers({
  tracking,
  callTime
});

export default rootReducer;
