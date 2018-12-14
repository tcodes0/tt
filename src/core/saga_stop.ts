import { takeEvery, select, put } from "redux-saga/effects"
import { TASK_STOP } from "./action_taskStop"
import taskUnset from "./action_taskUnset"
import { State, historyAdd } from "../core"
import { Action } from "../util"
import { PayloadHistoryAdd, HISTORY_ADD } from "./action_historyAdd"

function* stopTask() {
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

export default function* sagaStop() {
  yield takeEvery(TASK_STOP, stopTask)
  yield takeEvery(HISTORY_ADD, () => {})
}
