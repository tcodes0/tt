import { combineReducers } from "redux";
import tracking from "../task/reducer_tracking";
import tasks from "../task/reducer_tasks";
import callTime from "../cli/reducer_callTime";

const rootReducer = combineReducers({
  tracking,
  callTime,
  tasks
});

export default rootReducer;
