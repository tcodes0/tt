import { combineReducers } from 'redux'
import task from './reducer_task'
import cli from './reducer_cli'
import history from './reducer_history'

const rootReducer = combineReducers({
  cli,
  task,
  history,
})

export default rootReducer
