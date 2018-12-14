import { TASK_SET, PayloadSet } from "."
import { Action } from "../util"
import { TASK_UNSET } from "./action_taskUnset"

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
  // @ts-ignore
  state = initialState,
  action: Action<Payloads>,
) {
  switch (action.type) {
    case TASK_SET: {
      const { name = "" } = action.payload
      const start = Date.now()
      const result: Task = { name, sprints: [{ start }] }
      return result
    }
    case TASK_UNSET: {
      return initialState
    }
    default:
      return state
  }
}