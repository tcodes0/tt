import { TASK_SET_START, PayloadSet, HISTORY_ADD, TASK_SET_END } from "."
import { Action } from "../util"

type Payloads = PayloadSet

export type Task = {
  name: string
  sprints: {
    start: number
    end?: number
  }[]
}

export type Sprint = Task["sprints"][0]

const initialState: Task = { name: "", sprints: [{ start: 0 }] }

export default function reducer(
  state = initialState,
  action: Action<Payloads>,
) {
  switch (action.type) {
    case TASK_SET_START: {
      const { name = "" } = action.payload
      const start = Date.now()
      const result: Task = { name, sprints: [{ start }] }
      return result
    }
    case TASK_SET_END: {
      const { sprints } = state
      const [head, ...others] = sprints
      head.end = Date.now()
      const result: Task = { ...state, sprints: [head, ...others] }
      return result
    }
    case HISTORY_ADD: {
      return initialState
    }
    default:
      return state
  }
}
