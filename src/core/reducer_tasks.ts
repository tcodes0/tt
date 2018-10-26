import { Action } from "redux-actions"
import { TASK_NEW, PayloadActionNew } from "./action_new"
import { TASK_STOP, PayloadActionStop } from "./action_stop"
import { Task } from "../tool"

const initialState: Task[] = []

export default function reducer(
  state = initialState,
  action: Action<PayloadActionNew & PayloadActionStop>,
) {
  switch (action.type) {
    case TASK_NEW: {
      const name = action.payload ? action.payload.name : ""
      const start = Date.now()
      const result = { name, start }
      return [...state, result]
    }
    case TASK_STOP: {
      const taskName = action.payload && action.payload.taskName
      const index = state.findIndex((task) => task.name === taskName)
      // const stopped = {
      //   name: state[index].name,
      //   start: state[index].start,
      //   end: Date.now()
      // };
      // dispatch(scheduleHistory(stopped))
      return [...state.slice(0, index), ...state.slice(index + 1)]
    }
    default:
      return state
  }
}
