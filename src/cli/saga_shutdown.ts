import { takeLatest, put } from "redux-saga/effects";
import { CLI_SHUTDOWN } from "./action_shutdown";
import setCallTime from "../cli/action_setCallTime";
import stateWrite from "../state/action_write";

function* shutdownSaga() {
  yield put(setCallTime());
  yield put(stateWrite());
}

export default function* watcher() {
  yield takeLatest(CLI_SHUTDOWN, shutdownSaga);
}
