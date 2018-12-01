import { combineReducers } from "redux"
import tasks from "./reducer_tasks"
import cli from "./reducer_cli"
import files from "./reducer_files"

const rootReducer = combineReducers({
  cli,
  tasks,
  files,
})

export default rootReducer
