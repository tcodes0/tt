import { takeLatest, call } from "redux-saga/effects"
import { Action } from "redux-actions"
import { writeTtFile } from "../util"
import { STATE_WRITE, PayloadActionWrite } from "./action_stateWrite"
import { getState } from "./store"

function* saga(action: Action<PayloadActionWrite>) {
  const { payload = {} } = action
  // @ts-ignore
  const { path } = payload
  // @ts-ignore
  const data = JSON.stringify(getState())

  yield call(writeTtFile)
  // yield call(writeTtFile, data, path)
}

export default function* stateWriteSaga() {
  yield takeLatest(STATE_WRITE, saga)
}
