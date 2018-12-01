import { takeLatest, put } from "redux-saga/effects"
import { CLI_SHUTDOWN } from "./action_cliShutdown"
import setCallTime from "./action_cliSetCallTime"
import stateWrite from "./action_stateWrite"

function* saga() {
  yield put(setCallTime({}))
  yield put(stateWrite({}))
}

export default function* shutdownSaga() {
  yield takeLatest(CLI_SHUTDOWN, saga)
}
