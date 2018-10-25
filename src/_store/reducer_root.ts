import { combineReducers } from "redux";
import tasks from "../task/reducer_tasks";
import cli from "../cli/reducer_cli";
import files from "../files/reducer_files";

const rootReducer = combineReducers({
  cli,
  tasks,
  files
});

export default rootReducer;
