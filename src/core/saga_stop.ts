import { takeEvery, select, put, call } from "redux-saga/effects"
import { TASK_STOP } from "./action_taskStop"
import taskUnset from "./action_taskUnset"
import { State, historyAdd, Task } from "../core"
import { Action, readTtFile, historyFile, writeTtFile, bailout } from "../util"
import { PayloadHistoryAdd, HISTORY_ADD } from "./action_historyAdd"

function* stopTask() {
  const { tracking }: State["cli"] = yield select<State>(state => state.cli)
  if (!tracking) {
    yield call(bailout, "No task to stop 🤔")
    return
  }

  const task: State["task"] = yield select<State>(state => state.task)
  // task.sprints[0].end = Date.now()

  yield put(historyAdd({ task }))
  yield put(taskUnset())
}

function* historyAddSaga(action: Action<PayloadHistoryAdd>) {
  const { task } = action.payload
  const history: Task[] = yield call(readTtFile, { file: historyFile })
  const newHistory = [task, ...history]
  yield call(writeTtFile, { file: historyFile, data: newHistory })
}

export default function* sagaStop() {
  yield takeEvery(TASK_STOP, stopTask)
  yield takeEvery(HISTORY_ADD, historyAddSaga)
}
