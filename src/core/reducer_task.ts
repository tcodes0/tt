import { TASK_SET, TASK_STOP, PayloadSet } from "."
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

const initialState: Task = { name: "", sprints: [] }

export default function reducer(
  state = initialState,
  action: Action<Payloads>,
) {
  switch (action.type) {
    case TASK_SET: {
      const { name = "" } = action.payload
      const start = Date.now()
      const result = { name, sprints: [{ start }] }
      return result
    }
    case TASK_STOP: {
      return initialState
    }
    default:
      return state
  }
}
