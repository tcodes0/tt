import { Object } from "../util"

export interface Action<Payload> {
  type: string
  payload: Payload
}

export default function createAction<Payload = Object>(type: string) {
  function actionCreator(): Action<Object>
  function actionCreator(payload: Payload): Action<Payload>
  function actionCreator(payload?: Payload) {
    if (payload) {
      const action: Action<Payload> = { type, payload }
      return action
    }
    const action: Action<Object> = { type, payload: {} }
    return action
  }

  return actionCreator
}
