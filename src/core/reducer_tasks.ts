import { TASK_NEW, TASK_STOP } from "."
import { Task, Action } from "../util"

const initialState: Task[] = []

export default function reducer(
  state = initialState,
  // @ts-ignore
  action: Action,
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
      const index = state.findIndex(task => task.name === taskName)
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
