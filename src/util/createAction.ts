import { Object } from "../util"

export interface Action<Payload> {
  type: string
  payload: Payload | Object
}

export default function createAction<Payload = Object>(type: string) {
  const actionCreator = (payload?: Payload) => {
    const safePayload = payload || {}
    const action: Action<Payload> = { type, payload: safePayload }

    return action
  }

  return actionCreator
}
