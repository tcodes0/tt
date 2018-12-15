import { takeLatest, select, put } from 'redux-saga/effects'
import { MODE_NEW } from './action_modeNew'
import { State, taskSetStart, PayloadNew, printLog, modeNew, modeStop } from '.'
import { Action, defaultTask } from '../util'

function* handleNew(action: Action<PayloadNew>) {
  const { name = defaultTask } = action.payload
  const { tracking } = yield select<State>(state => state.cli)

  if (!tracking) {
    yield put(taskSetStart({ name }))
    return
  }

  yield put(modeStop())
  yield put(printLog({ what: 'last' }))
  yield put(modeNew({ name }))
}

export default function* modeNewSaga() {
  yield takeLatest(MODE_NEW, handleNew)
}
