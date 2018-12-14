import { takeEvery, select, put, call } from "redux-saga/effects"
import { TASK_STOP } from "./action_taskStop"
import taskUnset from "./action_taskUnset"
import { State, historyAdd, cliWrite } from "../core"
import { Action, readTtFile, historyFile, bailout, History } from "../util"
import { PayloadHistoryAdd, HISTORY_ADD } from "./action_historyAdd"

function* stopTask() {
  const { tracking }: State["cli"] = yield select<State>(state => state.cli)
  if (!tracking) {
    yield call(bailout, "No task to stop 🤔")
    return
  }

  const task: State["task"] = yield select<State>(state => state.task)

  yield put(historyAdd({ task }))
  yield put(taskUnset())
}

function* historyAddSaga(action: Action<PayloadHistoryAdd>) {
  const { task } = action.payload
  const { ttRoot }: State["cli"] = yield select<State>(state => state.cli)
  const { history: parsedHist }: History = yield call(readTtFile, {
    file: historyFile,
    path: ttRoot,
  })

  const history = parsedHist || []
  const newHistory = [task, ...history]
  const data = { history: newHistory }
  yield put(cliWrite({ file: historyFile, data, path: ttRoot }))
}

export default function* sagaStop() {
  yield takeEvery(TASK_STOP, stopTask)
  yield takeEvery(HISTORY_ADD, historyAddSaga)
}
