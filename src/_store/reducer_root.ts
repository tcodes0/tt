import { combineReducers } from "redux";
import tracking from "../task/reducer_tracking";
import tasks from "../task/reducer_tasks";
import callTime from "../cli/reducer_callTime";
import reading from "../state/reducer_reading";

const rootReducer = combineReducers({
  tracking,
  callTime,
  tasks,
  reading
});

export default rootReducer;
