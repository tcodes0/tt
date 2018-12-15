import { MODE_INIT } from './action_modeInit'
import { takeLatest, select, put } from 'redux-saga/effects'
import { ttFiles } from '../util'
import { State, cliWrite } from '.'

function* saga() {
  const { ttRoot } = yield select<State>(state => state.cli)

  for (const file of ttFiles) {
    yield put(cliWrite({ file, path: ttRoot }))
  }
}

export default function* initSaga() {
  yield takeLatest(MODE_INIT, saga)
}
