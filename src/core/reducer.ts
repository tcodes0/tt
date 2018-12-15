import { combineReducers } from 'redux'
import task from './reducer_task'
import cli from './reducer_cli'

const rootReducer = combineReducers({
  cli,
  task,
})

export default rootReducer
