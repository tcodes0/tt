import { MODE_NEW, PayloadNew } from "./action_modeNew"
import { takeLatest, select, put } from "redux-saga/effects"
import { State } from "."
import { Action } from "../util"
import action_taskNew from "./action_taskNew"

function* saga(action: Action<PayloadNew>) {
  const { name = "Personal Task" } = action.payload
  const { tracking, callTime } = yield select<State>(state => state.cli)
  //@ts-ignore
  const recent = callTime - Date.now() > -10000 // 1 minute

  if (!tracking) {
    yield put(action_taskNew({ name }))
    return
  }
}

export default function* NewSaga() {
  yield takeLatest(MODE_NEW, saga)
}
