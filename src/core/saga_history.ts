import { takeEvery, select, put, call } from 'redux-saga/effects'
import { State, cliWrite, taskSetEnd } from '.'
import { Action, readTtFile, historyFile, bailout, History } from '../util'
import { PayloadHistoryAdd, HISTORY_ADD } from './action_historyAdd'
import { PayloadHistoryRead, HISTORY_READ } from './action_historyRead'
import historySet from './action_historySet'

function* handleHistoryAdd(action: Action<PayloadHistoryAdd>) {
  const { task } = action.payload
  const { ttRoot }: State['cli'] = yield select<State>(state => state.cli)
  const result: { history: History } = yield call(readTtFile, {
    file: historyFile,
    path: ttRoot,
  })

  const history = result.history || []
  const newHistory = [task, ...history]
  const data = { history: newHistory }
  yield put(cliWrite({ file: historyFile, data, path: ttRoot }))
}

function* handleHistoryRead(action: Action<PayloadHistoryRead>) {
  const { ttRoot }: State['cli'] = yield select<State>(state => state.cli)
  const result: { history: History } = yield call(readTtFile, {
    file: historyFile,
    path: ttRoot,
  })

  const history = result.history || []
  yield put(historySet({ history }))
}

export default function* sagaStop() {
  yield takeEvery(HISTORY_ADD, handleHistoryAdd)
  yield takeEvery(HISTORY_READ, handleHistoryRead)
}
