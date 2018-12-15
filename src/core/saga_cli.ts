import { takeLatest, put, call, select } from 'redux-saga/effects'
import { CLI_SHUTDOWN } from './action_cliShutdown'
import { CLI_LOAD_STATE, PayloadLoadState } from './action_cliLoadState'
import setCallTime from './action_cliSetCallTime'
import write, { CLI_WRITE, PayloadWrite } from './action_cliWrite'
import { loadState, Action, writeTtFile, stateFile } from '../util'
import { State } from './store'

function* loadSaga(action: Action<PayloadLoadState>) {
  const { payload } = action
  yield call(loadState, payload)
  yield put({
    type: 'CLI_LOAD_STATE_SUCCESS',
  })
}

function* shutdownSaga() {
  yield put(setCallTime())
  const state: State = yield select()

  yield put(
    write({
      path: state.cli.ttRoot,
      file: stateFile,
      data: state,
    }),
  )
}

function* writeSaga(action: Action<PayloadWrite>) {
  const { payload } = action
  yield call(writeTtFile, payload)
}

export default function* cliSaga() {
  yield takeLatest(CLI_SHUTDOWN, shutdownSaga)
  yield takeLatest(CLI_LOAD_STATE, loadSaga)
  yield takeLatest(CLI_WRITE, writeSaga)
}
