import { takeLatest, put } from "redux-saga/effects"
import { CLI_SHUTDOWN, action_setCallTime, action_write } from "."

function* shutdownSaga() {
  yield put(action_setCallTime({}))
  yield put(action_write({}))
}

export default function* watcher() {
  yield takeLatest(CLI_SHUTDOWN, shutdownSaga)
}
