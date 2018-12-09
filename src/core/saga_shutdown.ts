import { takeLatest, put, call } from "redux-saga/effects"
import { CLI_SHUTDOWN } from "./action_cliShutdown"
import { CLI_LOAD_STATE } from "./action_cliLoadState"
import setCallTime from "./action_cliSetCallTime"
import stateWrite from "./action_stateWrite"
import { loadState, ArgLoadState, Action } from "../util"

function* loadSaga(action: Action<ArgLoadState>) {
  yield call(loadState(action.payload))
}

function* shutdownSaga() {
  yield put(setCallTime({}))
  yield put(stateWrite({}))
}

export default function* cliSaga() {
  yield takeLatest(CLI_SHUTDOWN, shutdownSaga)
  yield takeLatest(CLI_LOAD_STATE, loadSaga)
}
