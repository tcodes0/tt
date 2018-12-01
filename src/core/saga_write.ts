import { takeLatest, call } from "redux-saga/effects"
import { Action } from "redux-actions"
import { writeState } from "../util"
import { STATE_WRITE, PayloadActionWrite } from "./action_stateWrite"
import { getState } from "./store"

function* saga(action: Action<PayloadActionWrite>) {
  const { payload = {} } = action
  const { path } = payload
  const data = JSON.stringify(getState())

  yield call(writeState, data, path)
}

export default function* stateWriteSaga() {
  yield takeLatest(STATE_WRITE, saga)
}
