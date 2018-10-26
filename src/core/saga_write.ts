import { takeLatest, call } from "redux-saga/effects"
import { Action } from "redux-actions"
import { writeState } from "../tool"
import { getState, STATE_WRITE, PayloadActionWrite } from "."

function* stateWriteSaga(action: Action<PayloadActionWrite>) {
  const { payload = {} } = action
  const { path } = payload
  const data = JSON.stringify(getState())

  yield call(writeState, data, path)
}

export default function* watcher() {
  yield takeLatest(STATE_WRITE, stateWriteSaga)
}
