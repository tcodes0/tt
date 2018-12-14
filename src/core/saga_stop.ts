import { takeEvery, select, put } from "redux-saga/effects"
import { TASK_STOP } from "./action_taskStop"
import taskUnset from "./action_taskUnset"
import { State, historyAdd, HISTORY_ADD } from "../core"
import { Action } from "../util"
import { PayloadHistoryAdd } from "./action_historyAdd"

function* sagaStop() {
  const task: State["task"] = yield select<State>(state => state.task)
  task.sprints[0].end = Date.now()

  yield put(historyAdd({ task }))
  yield put(taskUnset())
}

// @ts-ignore
function* sagaHistory(action: Action<PayloadHistoryAdd>) {
  // @ts-ignore
  const { task } = action.payload
  yield 33
}

export default function* stateWriteSaga() {
  yield takeEvery(TASK_STOP, sagaStop)
  yield takeEvery(HISTORY_ADD, () => {})
}
