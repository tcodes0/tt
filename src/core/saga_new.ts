import { takeLatest, select, put } from "redux-saga/effects"
import { State, taskNew, MODE_NEW, PayloadSet, taskStop, printLog } from "."
import { Action } from "../util"

function* saga(action: Action<PayloadSet>) {
  const { name = "Personal Task" } = action.payload
  const { tracking } = yield select<State>(state => state.cli)
  // const recent = callTime - Date.now() > -10000 // 1 minute

  if (!tracking) {
    yield put(taskNew({ name }))
    return
  }

  yield put(taskStop())
  yield put(printLog({ what: "last" }))
  yield put(taskNew({ name }))
}

export default function* NewSaga() {
  yield takeLatest(MODE_NEW, saga)
}
