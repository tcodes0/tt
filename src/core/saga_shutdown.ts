import { takeLatest, put } from "redux-saga/effects"
import { CLI_SHUTDOWN, action_cliSetCallTime, action_stateWrite } from "."

function* shutdownSaga() {
  yield put(action_cliSetCallTime({}))
  yield put(action_stateWrite({}))
}

export default function* watcher() {
  yield takeLatest(CLI_SHUTDOWN, shutdownSaga)
}
