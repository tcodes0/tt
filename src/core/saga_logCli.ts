import { takeLatest, select, put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { MODE_LOG, PayloadLog } from './action_modeLog'
import historyRead from './action_historyRead'
import { State, taskSetStart, modeLog, modeNew, modeStop } from '.'
import { Action, History } from '../util'
import log from '../app/log'

function* handleLog(action: Action<PayloadLog>) {
  const { time = 'last' } = action.payload
  const { tracking } = yield select<State>(state => state.cli)

  if (!tracking) {
    let result: { history: History } = yield select<State>(
      state => state.history,
    )

    // let iterations = 0
    if (!result.history) {
      yield put(historyRead())
      // while (!history) {
      //   iterations++
      yield delay(1)
      const { history: h }: { history: History } = yield select<State>(
        state => state.history,
      )
      result.history = h
      // }
    }

    const [last] = result.history
    yield call(log, last)
    return
  }

  // yield put(modeStop())
  // yield put(modeLog({ time: 'last' }))
  // yield put(modeNew({ name }))
}

export default function* modeLogSaga() {
  yield takeLatest(MODE_LOG, handleLog)
}
