import { TASK_SET, TASK_STOP, PayloadSet } from "."
import { Task, Action } from "../util"

type Payloads = PayloadSet
const initialState: Task = { name: "", start: 0 }

export default function reducer(
  state = initialState,
  action: Action<Payloads>,
) {
  switch (action.type) {
    case TASK_SET: {
      const { name = "" } = action.payload
      const start = Date.now()
      const result = { name, start }
      return result
    }
    case TASK_STOP: {
      return initialState
    }
    default:
      return state
  }
}
