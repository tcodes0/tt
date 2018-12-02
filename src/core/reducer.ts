import { combineReducers } from "redux"
import tasks from "./reducer_tasks"
import cli from "./reducer_cli"

const rootReducer = combineReducers({
  cli,
  tasks,
})

export default rootReducer
