import { takeEvery, select, put, call } from 'redux-saga/effects'
import taskUnset from './action_taskUnset'
import { State, historyAdd, cliWrite, taskSetEnd } from '../core'
import { Action, readTtFile, historyFile, bailout, History } from '../util'
import { PayloadHistoryAdd, HISTORY_ADD } from './action_historyAdd'
import { MODE_STOP } from './action_modeStop'

function* handleStop() {
  const { tracking }: State['cli'] = yield select<State>(state => state.cli)
  if (!tracking) {
    yield call(bailout, 'No task to stop 🤔')
    return
  }

  yield put(taskSetEnd())
  const task: State['task'] = yield select<State>(state => state.task)
  yield put(historyAdd({ task }))
  yield put(taskUnset())
}

function* handleHistoryAdd(action: Action<PayloadHistoryAdd>) {
  const { task } = action.payload
  const { ttRoot }: State['cli'] = yield select<State>(state => state.cli)
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
  yield takeEvery(MODE_STOP, handleStop)
  yield takeEvery(HISTORY_ADD, handleHistoryAdd)
}
